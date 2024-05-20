import { useNavigate } from 'react-router-dom';

// React Hook Form
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Components
import CustomButton from 'src/components/atoms/Button';
import InputField from 'src/components/atoms/InputField';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import AuthLayout from 'src/components/layout/AuthLayout';

// Images
import { MasterCardIcon } from 'assets/images';

// Data
import { LABELS } from 'src/data/labels';

// Types
import { BillingDetailsFormData } from 'types/form/register';

// Schema
import {
  BillingDetailsSchema,
  BillingDetailsSchemaType,
} from 'src/schema/billing.schema';

// i18next
import { useTranslation } from 'react-i18next';

// Utils
import { stateSelectOptions } from 'src/utils/constants';
import { useEnterKeySubmit } from 'src/utils/helper';

// Data
import { LINKS } from 'src/data/links';

const Billing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BillingDetailsSchemaType>({
    resolver: zodResolver(BillingDetailsSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<BillingDetailsSchemaType> = (
    data: BillingDetailsFormData
  ) => {
    console.log(data);
    navigate(LINKS.WORKSPACE_TEAM_INVITE);
  };

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <AuthLayout key="subscription-plan" canGoBack>
      <div className="mb-8 text-center">
        <Text
          containerTag="h5"
          className="text-2xl font-semibold text-foreground md:text-4xl"
        >
          {t('enterBillingDetails')}
        </Text>
        <Text containerTag="p" className="mt-3 text-base text-default-500">
          {t('enterYourBillingDetails')}
        </Text>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <Controller
            name="cardName"
            control={control}
            render={({ field }) => (
              <InputField
                label={t('nameOnCard')}
                name="cardName"
                field={field}
                errors={errors}
              />
            )}
          />
        </div>
        <div className="mb-5">
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <InputField
                label={t('cardNumber')}
                name="cardNumber"
                field={field}
                errors={errors}
                type="number"
                rigthIcon={
                  <img
                    src={MasterCardIcon}
                    alt="visa"
                    className="h-9 w-12"
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Controller
              name="expirationDate"
              control={control}
              render={({ field }) => (
                <InputField
                  label={LABELS.expirationDate}
                  name="expirationDate"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('cvv')}
                  name="cvv"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>
        </div>
        <div className="mb-5">
          <Controller
            name="streetAddress"
            control={control}
            render={({ field }) => (
              <InputField
                label={t('streetAddress')}
                name="streetAddress"
                field={field}
                errors={errors}
              />
            )}
          />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <SelectInput
                  label={t('state')}
                  field={field}
                  errors={errors}
                  options={stateSelectOptions}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('zipCode')}
                  name="zipCode"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>
        </div>

        <CustomButton size="lg" className="mt-4" fullWidth type="submit">
          {t('saveBillingAndContinue')}
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default Billing;
