import { useNavigate } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Icons
import { Add } from 'iconsax-react';

// Components
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import CustomTable from 'src/components/molecules/Table';

// Dummy Data
import {
  SettingRolesTableColumns,
  SettingRolesTableRows,
} from 'src/data/dummyData';

const Roles = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-5 mt-8 flex justify-between">
        <SearchBar classNames={{ inputWrapper: 'w-72' }} />

        <CustomButton leadingIcon={<Add size="22" />} className="text-sm">
          {t('addNewRole')}
        </CustomButton>
      </div>

      <div className="my-5">
        <CustomTable
          columns={SettingRolesTableColumns}
          rows={SettingRolesTableRows}
          onRowClick={row => {
            navigate('/settings/roles/edit-role', { state: row });
          }}
        />
      </div>
    </>
  );
};

export default Roles;
