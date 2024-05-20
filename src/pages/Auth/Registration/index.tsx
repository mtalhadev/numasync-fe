import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Components
import CustomButton from 'src/components/atoms/Button';
import CheckBox from 'src/components/atoms/Checkbox';
import InputField from 'src/components/atoms/InputField';
import Text from 'src/components/atoms/Text';

// Data
import { LINKS } from 'src/data/links';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// Utils
import AuthLayout from 'src/components/layout/AuthLayout';

// i18next
import { useTranslation } from 'react-i18next';

// Schema
import {
  registrationSchema,
  registrationSchemaType,
} from 'src/schema/registration.schema';

// utils
import { useEnterKeySubmit } from 'src/utils/helper';

const Registration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const invitation = true;

  const {
    control,
    formState: { errors, touchedFields },
    handleSubmit,
    watch,
    trigger,
  } = useForm<registrationSchemaType>({
    resolver: zodResolver(registrationSchema),
    mode: 'onTouched',
  });

  const Password = useRef({});
  Password.current = watch('password', '');

  const onSubmit = (data: registrationSchemaType) => {
    console.log(data);
    navigate(LINKS.AUTHENTICATION_CODE);
  };

  useEffect(() => {
    if (Password.current && touchedFields.confirmPassword) {
      trigger('confirmPassword');
    }
  }, [Password.current, trigger, touchedFields.confirmPassword]);

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <AuthLayout key="register">
      <div className="mt-6 text-center">
        <Text
          containerTag="h5"
          className="text-2xl font-semibold  text-foreground md:text-4xl"
        >
          {invitation
            ? t('youBeenInvitedToCreateANumasyncAccount')
            : t('createYourNumasyncAccount')}
        </Text>
        <Text
          containerTag="p"
          className="mt-3 text-base font-light text-default-500"
        >
          {invitation
            ? t('letsStartBtCreatingYourAccount')
            : t('yourTrustedPartnerCompanionAccounting')}
        </Text>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-5">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <InputField
                    label={t('firstName')}
                    name="firstName"
                    field={field}
                    errors={errors}
                  />
                )}
              />
            </div>
            <div className="mb-5">
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <InputField
                    label={t('lastName')}
                    name="lastName"
                    field={field}
                    errors={errors}
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-5">
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('phoneNumber')}
                  name="phoneNumber"
                  field={field}
                  errors={errors}
                  type="number"
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

          <Controller
            name="agree"
            control={control}
            render={({ field }) => (
              <CheckBox field={field} errors={errors} name="agree">
                <Text containerTag="p" className="text-small">
                  {t('byRigisteringAnAccountOnNumasync')}
                  <Link
                    to="#"
                    className="inline-block text-primary underline underline-offset-2"
                  >
                    {' '}
                    {t('termsConditions')}
                  </Link>{' '}
                  {t('and')}{' '}
                  <Link
                    to="#"
                    className="text-primary underline underline-offset-2"
                  >
                    {t('privacyPolicy')}
                  </Link>
                </Text>
              </CheckBox>
            )}
          />
        </div>

        <CustomButton type="submit" size="lg" fullWidth>
          {t('next')}
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Registration;
