import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Icons
import { Add } from 'iconsax-react';

// NextUI
import { Divider } from '@nextui-org/react';

// Data
import {
  EntityAccessManagmentTableColumns,
  EntityAccessManagmentTableRows,
  EntityAccessManagmentUserTableColumns,
  EntityAccessManagmentuserTableRows,
} from 'src/data/dummyData';

// Types
import { dropDownMenus } from 'src/types/dropDownTypes';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import PopUpModal from 'src/components/atoms/PopUpModal';
import InviteEntityOrganization from 'src/components/organisms/InviteEntityOrganization';
import InviteEntityUser from 'src/components/organisms/InviteEntityUser';

const AccessManagement = () => {
  const { t } = useTranslation();

  const [managementAccessModel, setManagementAccessModel] =
    useState<boolean>(false);
  const [revokeAccessModel, setRevokeAccessModel] = useState<boolean>(false);
  const [inviteOrganization, setInviteOrganization] = useState<boolean>(false);
  const [inviteOrganizationUser, setInviteOrganizationUser] =
    useState<boolean>(false);

  const ActionMenu = [
    {
      title: t('revokeAccess'),
      key: t('revokeAccess'),
      color: 'danger',
      onClick: () => {
        setRevokeAccessModel(true);
      },
    },
    {
      title: t('setAsManagement'),
      key: t('setAsManagement'),
      onClick: () => {
        setManagementAccessModel(true);
      },
    },
    {
      title: t('setReadOnly'),
      key: t('setReadOnly'),
      onClick: () => {},
    },
  ];

  return (
    <>
      <PopUpModal
        isOpen={managementAccessModel}
        onClose={() => setManagementAccessModel(false)}
        onSubmit={() => setManagementAccessModel(false)}
        title={t('managementAccess')}
      >
        <Text containerTag="p" className="text-base text-default-500">
          {t(
            'only1AccountingFirmCanManagementAccessTimeAreYouSureYouWishAccountingCompany'
          )}
        </Text>
      </PopUpModal>

      <PopUpModal
        isOpen={revokeAccessModel}
        onClose={() => setRevokeAccessModel(false)}
        onSubmit={() => setRevokeAccessModel(false)}
        title={t('revokeUserAccess')}
        submitButtonColor="danger"
        buttonLabel={t('delete')}
      >
        <Text containerTag="p" className="text-base text-default-500">
          {t('areYouSureYouWantRevokeAccessForThisUserFromTheEntity')}
        </Text>
      </PopUpModal>

      <InviteEntityOrganization
        isOpen={inviteOrganization}
        setIsOpen={setInviteOrganization}
      />

      <InviteEntityUser
        isOpen={inviteOrganizationUser}
        setIsOpen={setInviteOrganizationUser}
      />

      <div className="mt-8 flex flex-col justify-between  gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('organizationsWithAccess')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('theseOrganizationsHaveAccessViewAndManageYourEntity')}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CustomButton
            leadingIcon={<Add size="20" />}
            onClick={() => setInviteOrganization(true)}
          >
            {t('inviteOrganization')}
          </CustomButton>
        </div>
      </div>

      <Divider className="my-5 bg-default-100" />

      <CustomTable
        columns={EntityAccessManagmentTableColumns}
        rows={EntityAccessManagmentTableRows}
        showPagination={false}
        customActionMenu={ActionMenu as dropDownMenus[]}
      />

      <Divider className="my-8 bg-default-100" />

      <div className="mt-8 flex flex-col justify-between  gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('usersWithAccess')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('theseUsersHaveAccessThisEntity')}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CustomButton
            leadingIcon={<Add size="20" />}
            onClick={() => setInviteOrganizationUser(true)}
          >
            {t('inviteUsers')}
          </CustomButton>
        </div>
      </div>

      <Divider className="mb-6 mt-5 bg-default-100" />

      <CustomTable
        columns={EntityAccessManagmentUserTableColumns}
        rows={EntityAccessManagmentuserTableRows}
        showPagination={false}
        onDelete={() => {
          alert('Delete');
        }}
        onView={() => {
          alert('View');
        }}
        onEdit={() => {
          alert('Edit');
        }}
      />
    </>
  );
};

export default AccessManagement;
