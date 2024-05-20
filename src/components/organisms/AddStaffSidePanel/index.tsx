import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import SidePanel from '../SidePanel';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import InputField from 'src/components/atoms/InputField';
import SelectInput from 'src/components/atoms/Select';
import CheckBox from 'src/components/atoms/Checkbox';
import Text from 'src/components/atoms/Text';

interface AddStaffSidePanelProps extends ChildSidePanelsProps {}

const DropDownOptions = [
  { value: 'role1', label: 'Role 1' },
  { value: 'role2', label: 'Role 2' },
  { value: 'role3', label: 'Role 3' },
];

const AddStaffSidePanel: FC<AddStaffSidePanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('addNewStaff')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('save')}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <InputField
            type="text"
            label={t('firstName')}
            variant="bordered"
            color="primary"
            field={{
              name: 'firstName',
              value: '',
              onChange: () => {},
              onBlur: () => {},
            }}
          />
          <InputField
            type="text"
            label={t('lastName')}
            variant="bordered"
            color="primary"
            field={{
              name: 'lastName',
              value: '',
              onChange: () => {},
              onBlur: () => {},
            }}
          />
        </div>
        <InputField
          type="text"
          label={t('email')}
          variant="bordered"
          color="primary"
          field={{
            name: 'email',
            value: '',
            onChange: () => {},
            onBlur: () => {},
          }}
        />
        <SelectInput label={t('role')} options={DropDownOptions} variant="bordered" value={''} onChange={() => {}} />

        <CheckBox
          field={{
            name: 'sentInvite',
            value: false,
            onChange: () => {},
            onBlur: () => {},
          }}
          name="sentInvite"
        >
          <Text containerTag="p" className="text-base">
            {t('sendUserInvitationEmail')}
          </Text>
        </CheckBox>
      </div>
    </SidePanel>
  );
};

export default AddStaffSidePanel;
