import { useCallback } from 'react';

// Icons
import { Call, Sms } from 'iconsax-react';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import InputField from 'src/components/atoms/InputField';
import Text from 'src/components/atoms/Text';
import TextArea from 'src/components/atoms/TextArea';
import FileUploader from 'src/components/molecules/FileUploader';

// Schema
import { WorkspaceProfile } from 'src/schema/workspaceProfile.schema';
import { zodResolver } from '@hookform/resolvers/zod/src/zod';

// Utils
import { UPLOADFILETYPES } from 'src/utils/enums';

const Profile = () => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<WorkspaceProfile>({ resolver: zodResolver(WorkspaceProfile) });

  const onDrop = useCallback((files: File[]) => {
    console.log(files);
    setValue('workspaceLogo', files[0]);
  }, []);

  return (
    <div>
      <div className="mt-8">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground"
        >
          {t('workspaceProfile')}
        </Text>

        <Text containerTag="h5" className="text-sm text-default-500">
          {t('updateYourOrganizationDetailshere')}
        </Text>
      </div>

      <Divider className="my-5" />

      <div className="flex max-w-[850px] flex-col justify-between gap-3 sm:flex-row sm:gap-8">
        <Text
          containerTag="h3"
          className=" basis-1/3 text-sm font-semibold text-foreground sm:w-60 sm:text-sm"
        >
          {t('organizationName')}
        </Text>
        <div className="basis-2/3 ">
          <Controller
            name="organizationName"
            control={control}
            render={({ field }) => (
              <InputField
                name="organizationName"
                field={field}
                errors={errors}
              />
            )}
          />
        </div>
      </div>

      <Divider className="my-5" />

      <div className="flex max-w-[850px] flex-col justify-between gap-3 sm:flex-row sm:gap-8">
        <div className="flex basis-1/3 flex-col ">
          <Text
            containerTag="h3"
            className="text-sm font-semibold text-foreground sm:w-60 sm:text-sm"
          >
            {t('workspaceLogo')}
          </Text>
          <Text containerTag="p" className="text-sm text-default-500">
            {t(
              'thisWillBePubliclyDisplayedThroughoutThePlatformToYourClientsAndPerspectiveClients'
            )}
          </Text>
        </div>
        <div className="flex basis-2/3 gap-5">
          <div className="w-full">
            <FileUploader
              uploadFileType={UPLOADFILETYPES.IMAGE}
              onDrop={onDrop}
            />
          </div>
          {watch('workspaceLogo') && (
            <img
              src={URL.createObjectURL(watch('workspaceLogo'))}
              alt="logo"
              className="h-20 w-20 rounded-full"
            />
          )}
        </div>
      </div>

      <Divider className="my-5" />

      <div className="flex max-w-[850px] flex-col justify-between gap-3 sm:flex-row sm:gap-8">
        <Text
          containerTag="h3"
          className="basis-1/3 text-sm font-semibold text-foreground sm:w-60 sm:text-sm"
        >
          {t('publicPhoneNumber')}
        </Text>
        <div className="basis-2/3">
          <Controller
            name="organizationName"
            control={control}
            render={({ field }) => (
              <InputField
                name="organizationName"
                field={field}
                errors={errors}
                leadingIcon={<Call size="20" />}
              />
            )}
          />
        </div>
      </div>

      <Divider className="my-5" />

      <div className="flex max-w-[850px] flex-col justify-between gap-3 sm:flex-row sm:gap-8">
        <Text
          containerTag="h3"
          className="basis-1/3 text-sm font-semibold text-foreground sm:w-60 sm:text-sm"
        >
          {t('publicEmail')}
        </Text>
        <div className="basis-2/3">
          <Controller
            name="organizationName"
            control={control}
            render={({ field }) => (
              <InputField
                name="organizationName"
                field={field}
                errors={errors}
                leadingIcon={<Sms size="20" />}
              />
            )}
          />
        </div>
      </div>

      <Divider className="my-5" />

      <div className="flex max-w-[850px] flex-col justify-between gap-3 sm:flex-row sm:gap-8">
        <div className="flex basis-1/3 flex-col">
          <Text
            containerTag="h3"
            className="text-sm font-semibold text-foreground sm:w-60 sm:text-sm"
          >
            {t('description')}
          </Text>
          <Text containerTag="p" className="text-sm text-default-500">
            {t('writeAShortDescriptionAboutYourOrganization')}
          </Text>
        </div>
        <div className="basis-2/3">
          <Controller
            name="organizationName"
            control={control}
            render={({ field }) => (
              <TextArea name="organizationName" field={field} errors={errors} />
            )}
          />
        </div>
      </div>

      <Divider className="my-5" />

      <div className="flex items-center justify-end gap-3">
        <CustomButton variant="bordered">{t('cancel')}</CustomButton>
        <CustomButton>{t('update')}</CustomButton>
      </div>
    </div>
  );
};

export default Profile;
