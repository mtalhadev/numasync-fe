// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import Divider from 'src/components/atoms/Divider';
import CheckBox from 'src/components/atoms/Checkbox';
import CustomTable from 'src/components/molecules/Table';

// Data
import {
  SettingEditRolesTableColumns,
  SettingEditRolesTableRows,
} from 'src/data/dummyData';
import { USERPERMISSIONS } from 'src/utils/enums';

const EditRole = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text
            containerTag="h1"
            className="mb-1 text-2xl font-semibold leading-8 text-foreground"
          >
            {t('editRole')}
          </Text>

          <Text
            containerTag="h4"
            className="text-base font-normal text-default-500"
          >
            {t('updateTheRolesNameAssignRightsToThatRoleAccordingly')}
          </Text>
        </div>

        <div className="flex gap-3">
          <CustomButton color="primary" variant="bordered" className="text-sm">
            {t('cancel')}
          </CustomButton>
          <CustomButton className="text-sm">{t('update')}</CustomButton>
        </div>
      </div>

      <SearchBar />

      <div className="mt-5">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground"
        >
          {t('entities')}
        </Text>

        <Text containerTag="h5" className="text-sm text-default-500">
          {t('assignPermissionsWhichToAssign')}
        </Text>

        <Divider className="my-8" />

        <div className="flex flex-wrap gap-12">
          {Object.keys(USERPERMISSIONS).map(permission => (
            <div key={permission} className="p-2">
              <CheckBox name={permission} label={permission} />
            </div>
          ))}
        </div>
      </div>

      <Divider className="my-8" />

      <Text
        containerTag="h2"
        className="mb-1 text-lg font-semibold text-foreground"
      >
        {t('workspaceManagement')}
      </Text>

      <Text containerTag="h5" className="text-sm text-default-500">
        {t('assignPermissionsWhichAssign')}
      </Text>

      <Divider className="my-5" />

      <div className="flex flex-wrap gap-12">
        {Object.keys(USERPERMISSIONS).map(permission => (
          <div key={permission} className="p-2">
            <CheckBox name={permission} label={permission} />
          </div>
        ))}
      </div>

      <Divider className="my-8" />

      <Text
        containerTag="h2"
        className="mb-1 text-lg font-semibold text-foreground"
      >
        {t('usersAssignedToRole')}
      </Text>

      <Text containerTag="h5" className="text-sm text-default-500">
        {t('seeTheUsersWhoAreThisRole')}
      </Text>

      <Divider className="my-5" />

      <CustomTable
        columns={SettingEditRolesTableColumns}
        rows={SettingEditRolesTableRows}
        showPagination={false}
        TrashIcon={true}
        showActionDropdown={false}
        onDelete={() => {
          alert('Delete');
        }}
      />
    </>
  );
};

export default EditRole;
