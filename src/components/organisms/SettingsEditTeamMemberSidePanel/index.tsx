import { FC, useState } from 'react';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import SidePanel from '../SidePanel';
import { useTranslation } from 'react-i18next';
import Tabs from 'src/components/atoms/Tabs';
import { TabsItem } from 'src/types/tabs';
import { Controller, useForm } from 'react-hook-form';
import InputField from 'src/components/atoms/InputField';
import { EditTeamMember } from 'src/schema/editTeamMember.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectInput from 'src/components/atoms/Select';
import { SettingsTeamMemberRoles } from 'src/utils/constants';
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import { Add, Trash } from 'iconsax-react';
import { DummyEntities, DummyEntitiesDropdown } from 'src/data/dummyData';
import Divider from 'src/components/atoms/Divider';
import PopUpModal from 'src/components/atoms/PopUpModal';

interface SettingsEditTeamMembersSidePanelProps extends ChildSidePanelsProps {
  teamMember?: { [key: string]: string | number };
}

type tabTypes = 'overview' | 'entities';

const SettingsEditTeamMemberSidePanel: FC<
  SettingsEditTeamMembersSidePanelProps
> = ({ isOpen, setIsOpen, teamMember }) => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<tabTypes>('overview');
  const [assignEntityModal, setAssignEntityModal] = useState<boolean>(false);

  const { control } = useForm<EditTeamMember>({
    values: {
      firstName: teamMember?.firstName as string,
      lastName: teamMember?.lastName as string,
      phoneNumber: teamMember?.phoneNumber as number,
      email: teamMember?.email as string,
      role: teamMember?.role as string,
      newEntity: '',
    },
    resolver: zodResolver(EditTeamMember),
  });

  const TabItems: TabsItem[] = [
    { key: 'overview', title: 'overview' },
    { key: 'entities', title: 'entities' },
  ];

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('editTeamMember')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('save')}
    >
      {/* Assign Entity Modal */}
      <PopUpModal
        isOpen={assignEntityModal}
        onClose={() => setAssignEntityModal(false)}
        onSubmit={() => setAssignEntityModal(false)}
        title={t('assignNewEntity')}
        buttonLabel={t('add')}
      >
        <Controller
          name="newEntity"
          control={control}
          render={({ field }) => (
            <InputField
              name="newEntity"
              label={t('entityName')}
              field={field}
              suggestionsList={DummyEntitiesDropdown}
            />
          )}
        />
      </PopUpModal>

      <Tabs
        tabs={TabItems}
        selected={selectedTab}
        onChange={item => setSelectedTab(item as tabTypes)}
        isExpanded
      />

      {selectedTab.toLowerCase() === 'overview' ? (
        <div className="my-5 flex flex-col gap-4">
          <div className="flex gap-4">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <InputField
                  name="firstName"
                  label={t('firstName')}
                  field={field}
                  disabled
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <InputField
                  name="lastName"
                  label={t('lastName')}
                  field={field}
                  disabled
                />
              )}
            />
          </div>

          <div className="flex gap-4">
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <InputField
                  name="phoneNumber"
                  label={t('phoneNumber')}
                  field={field}
                  disabled
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputField
                  name="email"
                  label={t('email')}
                  field={field}
                  disabled
                />
              )}
            />
          </div>

          <SelectInput label={t('role')} options={SettingsTeamMemberRoles} />
        </div>
      ) : (
        <div className="my-4">
          <div className="flex items-center justify-between gap-12">
            <Text
              containerTag="h3"
              className="text-base font-semibold text-foreground"
            >
              {t('assignedEntities')}
            </Text>
            <CustomButton
              variant="light"
              leadingIcon={<Add size={24} />}
              onClick={() => setAssignEntityModal(true)}
            >
              <Text
                containerTag="span"
                className="text-base font-medium underline"
              >
                {t('addNewEntity')}
              </Text>
            </CustomButton>
          </div>

          <div className="p-4">
            {DummyEntities.map(entity => (
              <>
                <div
                  key={entity.key}
                  className="flex items-center justify-between py-4"
                >
                  <Text containerTag="p" className="text-sm text-foreground">
                    {entity.title}
                  </Text>
                  <Trash size="24" className="cursor-pointer text-danger" />
                </div>
                <Divider />
              </>
            ))}
          </div>
        </div>
      )}
    </SidePanel>
  );
};

export default SettingsEditTeamMemberSidePanel;
