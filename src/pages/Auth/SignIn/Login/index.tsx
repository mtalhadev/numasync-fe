import { Link, useNavigate } from 'react-router-dom';

// React Hook Form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import CustomButton from 'src/components/atoms/Button';
import CheckBox from 'src/components/atoms/Checkbox';
import InputField from 'src/components/atoms/InputField';
import Text from 'src/components/atoms/Text';

// Data
import { LINKS } from 'src/data/links';

// Schema
import { loginSchema, loginSchemaType } from 'src/schema/login.schema';

// Types
import SecoundaryButton from 'src/components/atoms/SecondaryButton';
import AuthLayout from 'src/components/layout/AuthLayout';
import { LoginApiData, LoginFormData } from 'types/form/login';
import { ErrorType } from 'src/types/commonTypes';

// Toast
import { showToast } from 'src/utils/toast';

// Redux
import { useLoginMutation } from 'src/redux/slice/apiSlices/authSlice';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type SerializedError } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Cookie
import { setCookie } from 'src/utils/cookie';

// Translation
import { useTranslation } from 'react-i18next';

// Utils
import { useEnterKeySubmit } from 'src/utils/helper';
import { setUser } from 'src/redux/slice/reducers/user.reducer';
import { NUMASYNC_SESSION, NUMASYNC_USER } from 'src/utils/constants';
// import { setUser } from 'src/redux/slice/reducers/global.reducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [login, { isLoading }] = useLoginMutation({});

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<loginSchemaType> = async (
    formValues: LoginFormData
  ) => {
    try {
      const res: {
        data?: LoginApiData;
        error?: FetchBaseQueryError | SerializedError;
      } = await login(formValues);

      if (res?.data) {
        dispatch(setUser(res.data.user));
        showToast({ message: t('loginSuccessful'), type: 'success' });
        setCookie(NUMASYNC_SESSION, JSON.stringify(res?.data?.session));
        setCookie(NUMASYNC_USER, JSON.stringify(res?.data?.user));
        navigate(LINKS.DASHBOARD);
      } else {
        const error = res?.error as ErrorType;
        showToast({ message: error?.data?.message, type: 'error' });
      }
    } catch (error) {
      console.error(error, 'error');
    } finally {
      setValue('email', '');
      setValue('password', '');
      setValue('remember', false);
    }
  };

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <AuthLayout key="login">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mx-auto">
          <div className="mb-8 text-center">
            <Text
              containerTag="h5"
              className="text-xl font-semibold text-foreground md:text-3xl"
            >
              {t('signIn')}
            </Text>
            <Text containerTag="p" className="mt-3 text-base text-default-500">
              {t('welcomeToNumasync')}
            </Text>
          </div>
          <div className="mb-6">
            <div className="mb-5">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputField
                    label={t('email')}
                    name="email"
                    type="email"
                    field={field}
                    errors={errors}
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputField
                    label={t('password')}
                    name="password"
                    field={field}
                    type="password"
                    errors={errors}
                  />
                )}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-row items-center justify-between">
            <div>
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <CheckBox field={field} name="remember">
                    <Text containerTag="p" className="text-small">
                      {t('rememberFor30Days')}
                    </Text>
                  </CheckBox>
                )}
              />
            </div>

            <Link to={LINKS.FORGOT_PASSWORD} tabIndex={-1}>
              <SecoundaryButton>{t('forgetPassword')}</SecoundaryButton>
            </Link>
          </div>
          <div className="mb-6">
            <CustomButton
              size="lg"
              fullWidth
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {t('signIn')}
            </CustomButton>
          </div>
          <div className="mb-6 flex flex-row items-center justify-center gap-1">
            <Text containerTag="p" className="text-small text-default-500">
              {t('dontHaveAnAccount')}
            </Text>

            <SecoundaryButton size="sm">{t('requestAccess')}</SecoundaryButton>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
