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

// Dummy Data
import {
  ClientUserTableColumns,
  ClientUserTableRows,
} from 'src/data/dummyData';
import { cn } from 'src/utils/cn';

// Constants
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
  UserActions,
} from 'src/utils/constants';

const Users = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('users')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('theseUsersHaveAccess')}
          </Text>
        </div>

        <CustomButton
          leadingIcon={<Add size="22" />}
          className="text-sm"
          onClick={() => {}}
        >
          {t('inviteUser')}
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
          columns={ClientUserTableColumns}
          rows={ClientUserTableRows}
        />
      </div>
    </div>
  );
};

export default Users;
