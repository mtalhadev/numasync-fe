import { useMemo } from 'react';

// React Router
import { useNavigate, useParams } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import SelectInput from 'src/components/atoms/Select';
import CustomTable from 'src/components/molecules/Table';
import PagesTrack from 'src/components/atoms/PagesTrack';
import CustomDatePicker from 'src/components/atoms/DatePicker';

// Utils
import {
  removeHyphensAndMakeCamelCase,
  removeWhiteSpaces,
} from 'src/utils/helper';

// Data
import {
  ChartOfAccountsTypeTableColumns,
  ChartOfAccountsTypeTableRows,
} from 'src/data/dummyData';
import { LINKS } from 'src/data/links';

const ChartOfAccountsType = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const pagesTrackList = useMemo(
    () => [
      {
        index: 1,
        name: t('entities'),
        onClick: () => navigate(LINKS.ENTITIES),
      },
      {
        index: 2,
        name: removeHyphensAndMakeCamelCase(params.entityName ?? ''),
        onClick: () => navigate(`${LINKS.ENTITIES}/${params.entityName}`),
      },
      {
        index: 3,
        name: t('chartOfAccounts'),
        onClick: () =>
          navigate(
            `${LINKS.ENTITIES}/${params.entityName}/${removeWhiteSpaces(t('chartOfAccounts').toLowerCase(), false, true)}`
          ),
      },
      {
        index: 4,
        name: removeHyphensAndMakeCamelCase(params.chartOfAccount ?? ''),
      },
    ],
    [params, t]
  );

  const onRowClick = (row: { [key: string]: string }) => {
    navigate(removeWhiteSpaces(row.coded.toLowerCase(), false, true), {
      state: row,
    });
  };

  return (
    <>
      <PagesTrack pagesTrackList={pagesTrackList} />

      <div className="my-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground sm:text-2xl"
          >
            {removeHyphensAndMakeCamelCase(params.chartOfAccount ?? '')}
          </Text>

          <Text
            containerTag="h5"
            className="text-sm text-default-500 sm:text-base"
          >
            {t('reviewTransactionsWithYourLedger')}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="w-[180px]">
            <SelectInput
              label={t('chartOfAccounts')}
              options={[
                { label: 'Export', value: 'Export' },
                { label: 'Import', value: 'Import' },
              ]}
              variant="bordered"
              value={''}
              onChange={() => {}}
            />
          </div>

          <CustomDatePicker />

          <CustomButton>{t('automationRules')}</CustomButton>
        </div>
      </div>

      <CustomTable
        columns={ChartOfAccountsTypeTableColumns}
        rows={ChartOfAccountsTypeTableRows}
        onRowClick={onRowClick}
      />
    </>
  );
};

export default ChartOfAccountsType;
