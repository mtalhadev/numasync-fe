import { FC } from 'react';
import { Link } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// zod
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';

// Schema
import { InviteEntityOrganizationSchema } from 'src/schema/InviteEntityOrganization.schema';

// Components
import SidePanel from '../SidePanel';
import InputField from 'src/components/atoms/InputField';
import TextArea from 'src/components/atoms/TextArea';

// Data
import { LINKS } from 'src/data/links';

// NextUI
import { Spacer } from '@nextui-org/react';

interface InviteEntityOrganizationProps extends ChildSidePanelsProps {}

const InviteEntityOrganization: FC<InviteEntityOrganizationProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(InviteEntityOrganizationSchema),
    mode: 'onTouched',
  });

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('inviteOrganization')}
      primaryButtonClick={handleSubmit(() => {
        console.log('save');
        alert('save');
      })}
      primaryButtonText={t('Save & Invite')}
    >
      <div className="mb-3 rounded-xl border border-default-200 bg-default-50 p-3">
        {t('dontHaveAnAccountingOrganizationWorkWithWeHelpHaveLookOur')}{' '}
        <Link
          to={LINKS.ACCOUNTINGFIRMDIRECTORY}
          className="text-primary-500 underline"
        >
          {t('accountingFirmDirectory')}
        </Link>{' '}
        {t('thatAlreadyUtilizingNumasyncToEfficientlyManageFinances')}
      </div>

      <form action="">
        <Controller
          name="organizationEmail"
          control={control}
          render={({ field }) => (
            <InputField
              label={t('organizationEmail')}
              name="organizationEmail"
              field={field}
              errors={errors}
            />
          )}
        />

        <Spacer className="mb-4" />

        <Controller
          name="messageToOrganization"
          control={control}
          render={({ field }) => (
            <TextArea
              label={t('messageToOrganization')}
              name="messageToOrganization"
              field={field}
              errors={errors}
            />
          )}
        />
      </form>
    </SidePanel>
  );
};

export default InviteEntityOrganization;
