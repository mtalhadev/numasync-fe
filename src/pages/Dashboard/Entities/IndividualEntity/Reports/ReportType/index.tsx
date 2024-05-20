import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import CustomDatePicker from 'src/components/atoms/DatePicker';
import PagesTrack from 'src/components/atoms/PagesTrack';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import {
  EntityReportAccountDailyBalanceTableColumns,
  EntityReportAccountDailyBalanceTableRows,
} from 'src/data/dummyData';
import { LINKS } from 'src/data/links';
import { ReportExportDropdownActions } from 'src/utils/constants';
import { removeHyphensAndMakeCamelCase, removeWhiteSpaces } from 'src/utils/helper';

const ReportType = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  const pagesTrackList = useMemo(
    () => [
      { index: 1, name: t('entities'), onClick: () => navigate(LINKS.ENTITIES) },
      {
        index: 2,
        name: removeHyphensAndMakeCamelCase(params.entityName ?? ''),
        onClick: () => navigate(`${LINKS.ENTITIES}/${params.entityName}`),
      },
      {
        index: 3,
        name: t('reports'),
        onClick: () =>
          navigate(`${LINKS.ENTITIES}/${params.entityName}/${removeWhiteSpaces(t('reports') as string, false, true)}`),
      },
      {
        index: 4,
        name: removeHyphensAndMakeCamelCase(params.reportType ?? ''),
      },
    ],
    [params, t, navigate],
  );

  return (
    <div>
      <PagesTrack pagesTrackList={pagesTrackList} />

      <div className="my-6 mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className="text-lg font-semibold leading-8 text-foreground sm:text-xl md:text-2xl">
            {removeHyphensAndMakeCamelCase(params.reportType ?? '')}
          </Text>

          <Text containerTag="h4" className="text-xs font-normal text-default-500 sm:text-sm md:text-base">
            {t('trackYourDailyAccountBalance')}
          </Text>
        </div>

        <div className="flex items-center gap-3">
          <CustomDatePicker />
          <div className="w-32">
            <SelectInput
              label={t('export')}
              options={ReportExportDropdownActions}
              variant="bordered"
              value={''}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      <CustomTable
        columns={EntityReportAccountDailyBalanceTableColumns}
        rows={EntityReportAccountDailyBalanceTableRows}
      />
    </div>
  );
};

export default ReportType;
