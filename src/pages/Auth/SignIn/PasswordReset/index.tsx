import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import { TickCircle } from 'iconsax-react';

// React Hook Form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import CustomButton from 'src/components/atoms/Button';
import InputField from 'src/components/atoms/InputField';
import SecoundaryButton from 'src/components/atoms/SecondaryButton';
import Text from 'src/components/atoms/Text';

// Data
import { LABELS } from 'src/data/labels';
import { LINKS } from 'src/data/links';

// Schema
import {
  PasswordSchemaType,
  passwordSchema,
} from 'src/schema/resetPassword.schema';

// i18next
import { useTranslation } from 'react-i18next';

// types
import AuthLayout from 'src/components/layout/AuthLayout';
import {
  hasCapitalLetter,
  hasNumericCharacter,
  hasSpecialCharacter,
  isValidPassword,
  useEnterKeySubmit,
} from 'src/utils/helper';
import { PasswordResetFormData } from 'types/form/passwordReset';

const PasswordReset = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const expiredPassword = false;

  const {
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<PasswordSchemaType>({
    resolver: zodResolver(passwordSchema),
    mode: 'onTouched',
  });

  const Password = useRef<string>('');

  Password.current = watch('password', '');

  const onSubmit: SubmitHandler<PasswordSchemaType> = (
    data: PasswordResetFormData
  ) => {
    console.log(data);
    navigate(LINKS.LOGIN);
  };

  useEffect(() => {
    if (Password.current && touchedFields.confirmPassword) {
      trigger('confirmPassword');
    }
  }, [Password.current, trigger, touchedFields.confirmPassword]);

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <AuthLayout key="passwordReset">
      <div className="mx-auto w-full" key="passwordReset">
        <Text
          containerTag="h3"
          className="text-center text-xl font-semibold text-foreground md:text-4xl"
        >
          {expiredPassword ? LABELS.passwordExpired : LABELS.setNewPassword}
        </Text>
        <Text
          containerTag="p"
          className="mt-3 text-center text-base text-default-500"
        >
          {expiredPassword
            ? LABELS.yourPasswordHasExpiredPleaseCreateANewOne
            : LABELS.yourNewPasswordMustBeDifferent}
        </Text>
        <form
          className="mt-8"
          onSubmit={handleSubmit(onSubmit)}
          key="working2"
        >
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
                  showErrorMessage={false}
                />
              )}
            />
          </div>
          <div className="mb-5">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('confirmPassword')}
                  name="confirmPassword"
                  field={field}
                  type="password"
                  errors={errors}
                />
              )}
            />
          </div>
          {Password.current !== '' && Password.current !== undefined && (
            <ul className="flex flex-col gap-1">
              <li
                className={`flex items-center gap-2 text-danger-500 ${isValidPassword(Password.current) ? 'text-success-500' : 'text-danger-500'}`}
              >
                <TickCircle size="20" />
                <Text containerTag="p" className="text-sm">
                  {isValidPassword(Password.current)
                    ? LABELS.passworkStrengthStrong
                    : LABELS.passwordStrengthWeek}
                </Text>
              </li>
              <li
                className={`flex items-center gap-2 text-danger-500 ${hasSpecialCharacter(Password.current) ? 'text-success-500' : 'text-danger-500'}`}
              >
                <TickCircle size="20" />
                <Text containerTag="p" className="text-sm">
                  {LABELS.mustContainAtLeast1SpecialCharacter}
                </Text>
              </li>
              <li
                className={`flex items-center gap-2 text-danger-500 ${hasCapitalLetter(Password.current) ? 'text-success-500' : 'text-danger-500'}`}
              >
                <TickCircle size="20" />
                <Text containerTag="p" className="text-sm">
                  {LABELS.mustContainAtLeast1CapitalLetter}
                </Text>
              </li>
              <li
                className={`flex items-center gap-2 text-danger-500 ${hasNumericCharacter(Password.current) ? 'text-success-500' : 'text-danger-500'}`}
              >
                <TickCircle size="20" />
                <Text containerTag="p" className="text-sm">
                  {LABELS.mustContainAtLeast1NumericValue}
                </Text>
              </li>
            </ul>
          )}
          <CustomButton
            onClick={() => {}}
            type="submit"
            fullWidth
            className="mt-8"
          >
            {expiredPassword ? LABELS.setNewPassword : LABELS.resetPassword}
          </CustomButton>
        </form>
        {!expiredPassword && (
          <div className="mt-6 flex items-center justify-center">
            <Link to={LINKS.LOGIN}>
              <SecoundaryButton size="sm">
                {LABELS.backToLogIn}
              </SecoundaryButton>
            </Link>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default PasswordReset;
