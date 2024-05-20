import { useNavigate } from 'react-router-dom';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Components
import CustomButton from 'src/components/atoms/Button';
import InputField from 'src/components/atoms/InputField';
import Text from 'src/components/atoms/Text';
import AuthLayout from 'src/components/layout/AuthLayout';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// Utils
import { useEnterKeySubmit } from 'src/utils/helper';

// i18next
import { useTranslation } from 'react-i18next';

// Data
import { LINKS } from 'src/data/links';

// Schema
import {
  workspaceCreateSchema,
  workspaceCreateSchemaType,
} from 'src/schema/workspaceCreate.schema';

const WorkspaceCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<workspaceCreateSchemaType>({
    resolver: zodResolver(workspaceCreateSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: workspaceCreateSchemaType) => {
    console.log(data);
    navigate(LINKS.WORKSPACE_SUBSCRIPTION);
  };

  useEnterKeySubmit(handleSubmit, onSubmit);

  return (
    <AuthLayout key="workspace-create">
      <div className="mt-6 text-center">
        <Text
          containerTag="h5"
          className="text-2xl font-semibold  text-foreground md:text-4xl"
        >
          {t('createNewWorkspace')}
        </Text>
        <Text
          containerTag="p"
          className="mt-3 text-base font-light text-default-500"
        >
          {t('yourTrustedPartnerCompanionAccounting')}
        </Text>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <div className="mb-5">
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('companyName')}
                  name="companyName"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>
          <div className="mb-5">
            <Controller
              name="companyPhoneNumber"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('companyPhoneNumber')}
                  name="companyPhoneNumber"
                  field={field}
                  errors={errors}
                  type="number"
                />
              )}
            />
          </div>
          <div className="mb-5">
            <Controller
              name="companyEmail"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('companyEmail')}
                  name="companyEmail"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>
          <div className="mb-5">
            <Controller
              name="companyWebsite"
              control={control}
              render={({ field }) => (
                <InputField
                  label={t('companyWebsite')}
                  name="companyWebsite"
                  field={field}
                  errors={errors}
                />
              )}
            />
          </div>
        </div>

        <CustomButton type="submit" size="lg" fullWidth>
          {t('next')}
        </CustomButton>
      </form>
    </AuthLayout>
  );
};

export default WorkspaceCreate;
