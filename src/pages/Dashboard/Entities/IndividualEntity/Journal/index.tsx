import { useTranslation } from 'react-i18next';

// Icons
import { Add } from 'iconsax-react';

// Components
import CustomButton from 'src/components/atoms/Button';
import CustomDatePicker from 'src/components/atoms/DatePicker';
import Divider from 'src/components/atoms/Divider';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';

// Data
import {
  ClientJournalTableColumns,
  ClientJournalTableRows,
} from 'src/data/dummyData';

const Journal = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        <div className="">
          <Text
            containerTag="h2"
            className="text-lg font-semibold text-foreground"
          >
            {t('journalEntries')}
          </Text>

          <Text containerTag="h5" className="text-sm   text-default-500">
            {t('manageYourJournalEntries')}
          </Text>
        </div>

        <div className="flex gap-3">
          <CustomDatePicker />

          <CustomButton
            leadingIcon={<Add size={24} className="text-primary-foreground" />}
          >
            {t('addJournalEntry')}
          </CustomButton>
        </div>
      </div>

      <Divider className="my-5 mb-6" />

      <CustomTable
        columns={ClientJournalTableColumns}
        rows={ClientJournalTableRows}
      />
    </div>
  );
};

export default Journal;
