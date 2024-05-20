import { FC, useMemo, useState } from 'react';
import SidePanel from '../SidePanel';
import InputField from 'src/components/atoms/InputField';
import SelectInput from 'src/components/atoms/Select';
import { useTranslation } from 'react-i18next';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import { Add } from 'iconsax-react';

interface AddGroupSidePanelProps extends ChildSidePanelsProps {}

type SelectedOptionType = 'add' | 'new' | 'create';

const AddGroupSidePanel: FC<AddGroupSidePanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const [selectedGroupOption, setSelectedGroupOption] = useState<SelectedOptionType>();

  const DropDownOptions = useMemo(
    () => [
      { value: 'add', label: 'Group 1' },
      { value: 'new', label: 'Group 2' },
      { value: 'create', label: t('createNewGroup'), leadingIcon: <Add size="22" /> },
    ],
    [t],
  );

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('addToGroup')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('save')}
    >
      <div className="flex flex-col gap-4">
        <SelectInput
          label={t('group')}
          options={DropDownOptions}
          variant="bordered"
          value={selectedGroupOption}
          onChange={(e) => setSelectedGroupOption(e.target.value as SelectedOptionType)}
        />
        {selectedGroupOption === 'create' && (
          <InputField
            type="text"
            label={t('newGroupName')}
            variant="bordered"
            color="primary"
            field={{
              name: 'newGroupName',
              value: '',
              onChange: () => {},
              onBlur: () => {},
            }}
          />
        )}
      </div>
    </SidePanel>
  );
};

export default AddGroupSidePanel;
