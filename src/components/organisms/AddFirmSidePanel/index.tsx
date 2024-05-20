import { FC } from 'react';
import SidePanel from '../SidePanel';
import InputField from 'src/components/atoms/InputField';
import SelectInput from 'src/components/atoms/Select';
import { useTranslation } from 'react-i18next';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';

interface AddFirmSidePanelProps extends ChildSidePanelsProps {}

const DropDownOptions = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15' },
];

const AddFirmSidePanel: FC<AddFirmSidePanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('addAccountingFirm')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('save')}
    >
      <div className="flex flex-col gap-4">
        <InputField
          type="text"
          label={t('accountingFirmName')}
          variant="bordered"
          color="primary"
          field={{
            name: 'name',
            value: '',
            onChange: () => {},
            onBlur: () => {},
          }}
        />
        <SelectInput
          label={t('subscriptionPlan')}
          options={DropDownOptions}
          variant="bordered"
          value={''}
          onChange={() => {}}
        />
      </div>
    </SidePanel>
  );
};

export default AddFirmSidePanel;
