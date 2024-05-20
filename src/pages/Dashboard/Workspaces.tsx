import { useMemo, useState } from 'react';

// Icons
import { Add, FilterTick } from 'iconsax-react';

// React Hook Form
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Next i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import InputField from 'src/components/atoms/InputField';
import SearchBar from 'src/components/atoms/SearchBar';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import AddFirmSidePanel from 'src/components/organisms/AddFirmSidePanel';
import InviteFirmSidePanel from 'src/components/organisms/InviteFirmSidePanel';
import WithPermissionGuard from 'src/components/organisms/WithPermissionGuard';
import { AccountingTableColumns } from 'src/data/dummyData';
import usePermissionHandler from 'src/hooks/usePermissionHandler';

// Schema
import { filterSchema } from 'src/schema/filter.schema';
import { dropDownMenus } from 'src/types/dropDownTypes';
import { USERPERMISSIONS } from 'src/utils/enums';

// Redux
import { useGetAllWorkspaceQuery } from 'src/redux/slice/apiSlices/workspaceSlice';
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
} from 'src/utils/constants';
import { cn } from 'src/utils/cn';

const Workspaces = () => {
  const { t } = useTranslation();
  const [showFilter, setShowFilters] = useState<boolean>(false);
  const [isInviteFirmPanelOpen, setIsInviteFirmPanelOpen] =
    useState<boolean>(false);
  const [isAddFirmPanelOpen, setIsAddFirmPanelOpen] = useState<boolean>(false);

  const { authorizeAndRedirect } = usePermissionHandler({
    screenName: 'workspaces',
    authorizeFor: USERPERMISSIONS.CAN_READ,
  });

  const {
    data: workSpaceData,
    isFetching,
    isLoading,
  } = useGetAllWorkspaceQuery({
    page: 1,
    limit: 10,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<filterSchema>({
    resolver: zodResolver(filterSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<filterSchema> = data => {
    console.log(data);
  };

  const TableActionMenus: dropDownMenus[] = useMemo(
    () => [
      { key: 'view', title: 'view' },
      { key: 'edit', title: 'edit' },
      { key: 'delete', title: 'delete', color: 'danger' },
    ],
    []
  );

  return (
    <div className="flex">
      <div className="w-full">
        <div className="">
          <div className="flex items-center">
            <div className="flex flex-col">
              <h4 className={cn(pagesTitleFontClasses)}>{t('workspaces')}</h4>
              <p className={cn(pagesSubTitleFontClasses)}>
                {t('manageAndTrackFirms')}
              </p>
            </div>
            <div className="ml-auto flex flex-wrap gap-3">
              <CustomButton
                variant="bordered"
                color="primary"
                radius="md"
                leadingIcon={<Add size="24" />}
                onClick={() => {
                  setIsInviteFirmPanelOpen(true);
                }}
              >
                {t('inviteAccountingFirm')}
              </CustomButton>

              <WithPermissionGuard
                screenName="workspaces"
                permission={USERPERMISSIONS.CAN_WRITE}
              >
                <CustomButton
                  size="lg"
                  variant="solid"
                  color="primary"
                  radius="md"
                  leadingIcon={<Add size="24" />}
                  onClick={authorizeAndRedirect({
                    callback: () => {
                      setIsAddFirmPanelOpen(true);
                    },
                    screen: 'workspaces',
                    permission: USERPERMISSIONS.CAN_WRITE,
                  })}
                >
                  {t('addAccountingFirm')}
                </CustomButton>
              </WithPermissionGuard>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <SearchBar classNames={{ inputWrapper: 'w-72' }} />

            <CustomButton
              isIconOnly
              variant="bordered"
              color="primary"
              radius="md"
              onClick={() => setShowFilters(!showFilter)}
            >
              <FilterTick size="24" />
            </CustomButton>
          </div>

          {/* Filters */}
          {showFilter && (
            <div>
              <Divider className="my-4" />
              <div className="flex flex-col gap-1">
                <h4 className="pt-4 text-2xl font-semibold leading-8 text-foreground">
                  Filters
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="mt-6 w-72">
                  <Controller
                    name="filterByOwner"
                    control={control}
                    render={({ field }) => (
                      <InputField
                        type="text"
                        name="filterByOwner"
                        label={t('filterByOwner')}
                        variant="bordered"
                        color="primary"
                        field={field}
                        errors={errors}
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col">
                  <Text
                    containerTag="p"
                    className="mb-1 text-sm text-default-500"
                  >
                    {t('filterByNoOfMembers')}
                  </Text>
                  <div className="flex gap-3">
                    <div className="w-32">
                      <Controller
                        name="min"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            name="min"
                            type="number"
                            label={t('min')}
                            variant="bordered"
                            color="primary"
                            field={field}
                            errors={errors}
                          />
                        )}
                      />
                    </div>
                    <div className="w-32">
                      <Controller
                        name="max"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            name="max"
                            type="number"
                            label={t('max')}
                            variant="bordered"
                            color="primary"
                            field={field}
                            errors={errors}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="ml-1 mt-6 flex items-center gap-4">
                  <Divider
                    orientation="vertical"
                    className="h-6 text-default-200"
                  />
                  <div className="gap-unit-3 ml-auto flex flex-1">
                    <CustomButton
                      size="sm"
                      variant="solid"
                      color="primary"
                      radius="md"
                      onClick={handleSubmit(onSubmit)}
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

          {/* Table */}
          <div className="mt-5">
            <CustomTable
              columns={AccountingTableColumns}
              rows={workSpaceData?.data}
              selectionMode="multiple"
              isLoading={isFetching || isLoading}
              isEmpty={!workSpaceData?.data?.length}
              customActionMenu={TableActionMenus}
            />
          </div>
        </div>
      </div>

      {/* Side Panels */}
      <InviteFirmSidePanel
        isOpen={isInviteFirmPanelOpen}
        setIsOpen={setIsInviteFirmPanelOpen}
      />
      <AddFirmSidePanel
        isOpen={isAddFirmPanelOpen}
        setIsOpen={setIsAddFirmPanelOpen}
      />
    </div>
  );
};

export default Workspaces;
