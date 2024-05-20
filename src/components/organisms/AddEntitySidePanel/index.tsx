import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import SidePanel from '../SidePanel';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { AddNewEntity } from 'src/schema/addNewEntity.schema';
import InputField from 'src/components/atoms/InputField';

interface AddEntitySidePanelProps extends ChildSidePanelsProps {}

const AddEntitySidePanel: FC<AddEntitySidePanelProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useForm<AddNewEntity>({ resolver: zodResolver(AddNewEntity) });

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('addNewEntity')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('save')}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Controller
            name="entityName"
            control={control}
            render={({ field }) => (
              <InputField
                type="text"
                label={t('entityName')}
                name="entityName"
                field={field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <InputField
                type="number"
                label={t('phoneNumberOptional')}
                name="phoneNumber"
                field={field}
                errors={errors}
              />
            )}
          />
        </div>

        <Controller
          name="businessEmail"
          control={control}
          render={({ field }) => (
            <InputField
              type="email"
              label={t('businessEmailOptional')}
              name="businessEmail"
              field={field}
              errors={errors}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              label={t('addressOptional')}
              name="address"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="website"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              label={t('websiteOptional')}
              name="website"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="client"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              label={t('clientOptional')}
              name="client"
              field={field}
              errors={errors}
            />
          )}
        />
      </div>
    </SidePanel>
  );
};

export default AddEntitySidePanel;
