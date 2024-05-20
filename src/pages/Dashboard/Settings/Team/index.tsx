import { Add, FilterTick } from 'iconsax-react';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import PopUpModal from 'src/components/atoms/PopUpModal';
import SearchBar from 'src/components/atoms/SearchBar';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import SettingsEditTeamMemberSidePanel from 'src/components/organisms/SettingsEditTeamMemberSidePanel';
import {
  FirmSettingsTeamTableColumns,
  FirmSettingsTeamTableRows,
} from 'src/data/dummyData';
import { dropDownMenus } from 'src/types/dropDownTypes';
import { STATUS } from 'src/utils/enums';

const Team = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { control } = useForm();
  const [removeTeamMemberModal, setRemoveTeamMemberModal] =
    useState<boolean>(false);
  const [isEditTeamMemberPanelOpen, setIsEditTeamMemberPanelOpen] =
    useState<boolean>(false);
  const [currentRowUser, setCurrentRowUser] = useState<{
    [key: string]: string;
  }>();

  const FirmSettingsTeamDropdownActions: dropDownMenus[] = useMemo(
    () => [
      {
        key: 'edit',
        title: 'edit',
        onClick: row => {
          setCurrentRowUser(row);
          setIsEditTeamMemberPanelOpen(true);
        },
      },
      {
        key: 'delete',
        title: 'delete',
        color: 'danger',
        onClick: row => {
          setCurrentRowUser(row);
          setRemoveTeamMemberModal(true);
        },
      },
    ],
    []
  );

  return (
    <div>
      {/* Modals */}
      {/* Remove Team Member Modal */}
      <PopUpModal
        isOpen={removeTeamMemberModal}
        onClose={() => setRemoveTeamMemberModal(false)}
        onSubmit={() => setRemoveTeamMemberModal(false)}
        title={t('removeTeamMember')}
        submitButtonColor="danger"
        buttonLabel={t('delete')}
      >
        <Text containerTag="p" className="text-base text-default-500">
          {t('areYouSureYouWantToRemove')}{' '}
          <Text containerTag="span" className="font-semibold">
            &quot;{currentRowUser?.firstName} {currentRowUser?.lastName}&quot;
          </Text>{' '}
          {t('fromYourTeamThisActionCannotBeUndone')}
        </Text>
      </PopUpModal>

      {/* Screen UI */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('workspaceTeamMemebers')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('trackAndManageYourOrganizationTeamMembers')}
          </Text>
        </div>

        <CustomButton leadingIcon={<Add size="24" />}>
          {t('addMember')}
        </CustomButton>
      </div>

      <Divider className="my-5 bg-default-100" />

      <div className="mt-8 flex items-center justify-between">
        <SearchBar classNames={{ inputWrapper: 'w-72' }} />

        <CustomButton
          isIconOnly
          variant="bordered"
          color="primary"
          radius="md"
          onClick={() => setShowFilters(true)}
        >
          <FilterTick size="24" />
        </CustomButton>
      </div>

      <Divider className="my-5 bg-default-100" />

      {/* Filters */}
      {showFilters && (
        <div>
          <div className="flex flex-col gap-1">
            <h4 className="pt-4 text-2xl font-semibold leading-8 text-foreground">
              Filters
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="mt-6 w-72">
              <Controller
                name="filterByStatus"
                control={control}
                render={({ field }) => (
                  <SelectInput
                    options={Object.keys(STATUS).map(key => ({
                      label: key,
                      value: key,
                    }))}
                    label={t('filterByStatus')}
                    variant="bordered"
                    color="primary"
                    field={field}
                  />
                )}
              />
            </div>

            <div className="mt-6 w-72">
              <Controller
                name="filterByRole"
                control={control}
                render={({ field }) => (
                  <SelectInput
                    options={Object.keys(STATUS).map(key => ({
                      label: key,
                      value: key,
                    }))}
                    label={t('filterByRole')}
                    variant="bordered"
                    color="primary"
                    field={field}
                  />
                )}
              />
            </div>

            <div className="ml-1 mt-6 flex items-center gap-4">
              <Divider
                orientation="vertical"
                className="h-6 text-default-200"
              />
              <div className="ml-auto flex flex-1 gap-3">
                <CustomButton
                  size="sm"
                  variant="solid"
                  color="primary"
                  radius="md"
                  onClick={() => {}}
                >
                  {t('applyFilters')}
                </CustomButton>
                <CustomButton
                  size="sm"
                  variant="light"
                  color="primary"
                  radius="md"
                >
                  {t('clearFilters')}
                </CustomButton>
              </div>
            </div>
          </div>
          <Divider className="my-4" />
        </div>
      )}

      <CustomTable
        columns={FirmSettingsTeamTableColumns}
        rows={FirmSettingsTeamTableRows}
        selectionMode="multiple"
        customActionMenu={FirmSettingsTeamDropdownActions}
      />

      {/* Side Panels */}
      <SettingsEditTeamMemberSidePanel
        isOpen={isEditTeamMemberPanelOpen}
        setIsOpen={setIsEditTeamMemberPanelOpen}
        teamMember={currentRowUser}
      />
    </div>
  );
};

export default Team;
