// Icons
import { Add, Import } from 'iconsax-react';

// i18n
import { useTranslation } from 'react-i18next';

// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import AddEntitySidePanel from 'src/components/organisms/AddEntitySidePanel';
import ImportCSVSidePanel from 'src/components/organisms/ImportCSVSidePanel';

// Data
import { EntitiesTableColumns, EntitiesTableRows } from 'src/data/dummyData';

// Constants
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
  UserActions,
} from 'src/utils/constants';

// Helpers
import { removeWhiteSpaces } from 'src/utils/helper';
import { dropDownMenus } from 'src/types/dropDownTypes';
import usePermissionHandler from 'src/hooks/usePermissionHandler';
import { USERPERMISSIONS } from 'src/utils/enums';
import { cn } from 'src/utils/cn';

const Entities = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authorizeAndRedirect } = usePermissionHandler({
    screenName: 'entities',
    authorizeFor: USERPERMISSIONS.CAN_READ,
  });

  const [isAddEntityPanelOpen, setIsAddEntityPanelOpen] =
    useState<boolean>(false);
  const [isImportPanelOpen, setIsImportPanelOpen] = useState<boolean>(false);

  const onRowClick = (row: { [key: string]: string }) => {
    navigate(removeWhiteSpaces(row.entityName.toLowerCase(), false, true), {
      state: row,
    });
  };

  const EntityActions: dropDownMenus[] = [
    {
      key: 'view',
      title: 'View',
      onClick: authorizeAndRedirect({
        callback: () => {},
        screen: 'entities',
        permission: USERPERMISSIONS.CAN_READ,
      }),
    },
    {
      key: 'archive',
      title: 'Archive',
      onClick: authorizeAndRedirect({
        callback: () => {},
        screen: 'entities',
        permission: USERPERMISSIONS.CAN_DELETE,
      }),
      color: 'danger',
    },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('entities')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('trackAndManageYourEntities')}
          </Text>
        </div>

        <div className="flex gap-3">
          <CustomButton
            color="primary"
            variant="bordered"
            leadingIcon={<Import size="22" />}
            className="text-sm"
            onClick={() => setIsImportPanelOpen(true)}
          >
            {t('import')}
          </CustomButton>
          <CustomButton
            leadingIcon={<Add size="22" />}
            className="text-sm"
            onClick={authorizeAndRedirect({
              callback: () => setIsAddEntityPanelOpen(true),
              screen: 'entities',
              permission: USERPERMISSIONS.CAN_WRITE,
            })}
          >
            {t('addEntity')}
          </CustomButton>
        </div>
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
          columns={EntitiesTableColumns}
          rows={EntitiesTableRows}
          onRowClick={onRowClick}
          selectionMode="multiple"
          customActionMenu={EntityActions}
        />
      </div>

      {/* Side Panels */}
      <AddEntitySidePanel
        isOpen={isAddEntityPanelOpen}
        setIsOpen={setIsAddEntityPanelOpen}
      />
      <ImportCSVSidePanel
        isOpen={isImportPanelOpen}
        setIsOpen={setIsImportPanelOpen}
      />
    </div>
  );
};

export default Entities;
