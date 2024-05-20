// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import Divider from 'src/components/atoms/Divider';
import InputField from 'src/components/atoms/InputField';
import CustomButton from 'src/components/atoms/Button';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Icons
import { Call, Sms } from 'iconsax-react';

// Schema
import {
  AccountDetailSchemaType,
  accountDetailSchema,
} from 'src/schema/accountDetail.schema';

// Utils
import { useEnterKeySubmit } from 'src/utils/helper';
import { useSelector } from 'react-redux';
import { GlobalTypes } from 'src/types/globalTypes';

const AccountDetail = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state: GlobalTypes) => state.userReducer);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AccountDetailSchemaType>({
    resolver: zodResolver(accountDetailSchema),
    mode: 'onTouched',
    defaultValues: {
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
    },
  });

  const onSubmit = (data: AccountDetailSchemaType) => {
    console.log(data);
  };

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <>
      <div className="mt-8">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground"
        >
          {t('accountDetails')}
        </Text>

        <Text containerTag="h5" className="text-sm text-default-500">
          {t('updateYourAccountDetailsHere')}
        </Text>
      </div>

      <Divider className="mb-6 mt-5" />

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('name')}
          </Text>
          <div className="flex w-full gap-4">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  name="firstName"
                  widhtFull
                  field={field}
                  errors={errors}
                  placeholder={t('firstName')}
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  widhtFull
                  name="lastName"
                  field={field}
                  errors={errors}
                  placeholder={t('lastName')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('email')}
          </Text>
          <div className="w-full">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  leadingIcon={<Sms size="20" />}
                  name="email"
                  field={field}
                  errors={errors}
                  placeholder={t('Email')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('phoneNumber')}
          </Text>
          <div className="w-full">
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  leadingIcon={<Call size="20" />}
                  name="phoneNumber"
                  field={field}
                  errors={errors}
                  placeholder={t('phoneNumber')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('password')}
          </Text>
          <div className="flex w-full gap-4">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputField
                  widhtFull
                  label={t('password')}
                  name="password"
                  field={field}
                  type="password"
                  errors={errors}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <InputField
                  widhtFull
                  label={t('confirmPassword')}
                  name="confirmPassword"
                  field={field}
                  type="password"
                  errors={errors}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex w-full items-center justify-end gap-4">
          <CustomButton color="primary" variant="bordered" className="text-sm">
            {t('cancel')}
          </CustomButton>
          <CustomButton className="text-sm" type="submit">
            {t('save')}
          </CustomButton>
        </div>
      </form>

      <Divider className="mb-10 mt-5" />

      <div className="mx-6 mb-8 flex items-center justify-between gap-10 rounded-[10px] bg-default-50 p-6">
        <div>
          <Text
            containerTag="h5"
            className="mb-2 text-lg font-semibold text-foreground"
          >
            {t('dangerZone')}
          </Text>

          <Text
            containerTag="h5"
            className="text-sm font-light text-default-500"
          >
            {t(
              'ifYouWishToCloseYourAccountYouMayCloseYourAccountAtAnyTimeWarningThisActionCannotBeUndoneandYouWillLoseAccessToAnyAndAllDataAssociatedtoYourAccount'
            )}
          </Text>
        </div>

        <CustomButton className="px-8 text-sm" color="danger">
          {t('closeAccount')}
        </CustomButton>
      </div>
    </>
  );
};

export default AccountDetail;
