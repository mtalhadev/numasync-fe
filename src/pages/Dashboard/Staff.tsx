import { useState } from 'react';

// Icons
import { Add } from 'iconsax-react';

// Hooks
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import AddStaffSidePanel from 'src/components/organisms/AddStaffSidePanel';

// Dummy Data
import {
  PlatformStaffTableColumns,
  PlatformStaffTableRows,
} from 'src/data/dummyData';

// Constants
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
  UserActions,
} from 'src/utils/constants';
import { cn } from 'src/utils/cn';

const Staff = () => {
  const { t } = useTranslation();
  const [isAddStaffPanelOpen, setIsAddStaffPanelOpen] =
    useState<boolean>(false);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('platformStaff')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('manageAndHaveTrackOfPlatformStaff')}
          </Text>
        </div>

        <CustomButton
          leadingIcon={<Add size="22" />}
          className="text-sm"
          onClick={() => setIsAddStaffPanelOpen(true)}
        >
          {t('addNewStaff')}
        </CustomButton>
      </div>

      <div className="flex justify-between">
        <SearchBar classNames={{ inputWrapper: 'w-72' }} />

        <div className="w-44">
          <SelectInput
            label={t('action')}
            options={UserActions}
            variant="bordered"
            value={''}
            onChange={() => {}}
            size="sm"
          />
        </div>
      </div>

      <div className="my-5">
        <CustomTable
          columns={PlatformStaffTableColumns}
          rows={PlatformStaffTableRows}
        />
      </div>

      {/* Side Panels */}
      <AddStaffSidePanel
        isOpen={isAddStaffPanelOpen}
        setIsOpen={setIsAddStaffPanelOpen}
      />
    </div>
  );
};

export default Staff;
