// i18next
import { useTranslation } from 'react-i18next';

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import Divider from 'src/components/atoms/Divider';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';

// Data
import {
  ClientEntityReportTableColumns,
  ClientEntityReportTableRows,
} from 'src/data/dummyData';

// Utils
import { removeWhiteSpaces } from 'src/utils/helper';

const Reports = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onRowClick = (row: { [key: string]: string }) => {
    navigate(removeWhiteSpaces(row.reportType.toLowerCase(), false, true), {
      state: row,
    });
  };

  return (
    <div>
      <div className="mt-8">
        <Text
          containerTag="h2"
          className="text-lg font-semibold text-foreground"
        >
          {t('reports')}
        </Text>

        <Text containerTag="h5" className="text-sm   text-default-500">
          {t('thisReportsProvideDataOfYourEntities')}
        </Text>
      </div>

      <Divider className="my-5 mb-6" />

      <CustomTable
        columns={ClientEntityReportTableColumns}
        rows={ClientEntityReportTableRows}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default Reports;
