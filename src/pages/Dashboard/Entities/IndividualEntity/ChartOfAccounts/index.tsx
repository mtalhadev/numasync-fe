// React Router
import { useNavigate } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Icons
import { Add } from 'iconsax-react';

// NextUI
import { Divider } from '@nextui-org/react';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import SelectInput from 'src/components/atoms/Select';
import CustomTable from 'src/components/molecules/Table';

// Utils
import { removeWhiteSpaces } from 'src/utils/helper';

// Data
import {
  EntityChartOfAccountTableColumns,
  EntityChartOfAccountTableRows,
} from 'src/data/dummyData';

const ChartOfAccounts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onRowClick = (row: { [key: string]: string }) => {
    navigate(removeWhiteSpaces(row.name.toLowerCase(), false, true), {
      state: row,
    });
  };

  return (
    <>
      <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('chartOfAccounts')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t(
              'ChartAccountsForBookkeepingPurposesExportableNumerousTypesAccountingSoftware'
            )}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="w-[130px]">
            <SelectInput
              label={t('action')}
              options={[
                { label: 'Export', value: 'Export' },
                { label: 'Import', value: 'Import' },
              ]}
              variant="bordered"
              value={''}
              onChange={() => {}}
            />
          </div>

          <CustomButton leadingIcon={<Add size="22" />}>
            {t('addAccount')}
          </CustomButton>
        </div>
      </div>

      <Divider className="my-5 bg-default-100" />

      <CustomTable
        columns={EntityChartOfAccountTableColumns}
        rows={EntityChartOfAccountTableRows}
        showPagination={false}
        onRowClick={onRowClick}
      />
    </>
  );
};

export default ChartOfAccounts;
