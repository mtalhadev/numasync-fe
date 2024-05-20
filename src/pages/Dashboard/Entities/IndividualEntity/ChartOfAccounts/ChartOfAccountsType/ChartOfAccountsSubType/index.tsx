import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import PagesTrack from 'src/components/atoms/PagesTrack';
import Divider from 'src/components/atoms/Divider';
import CustomButton from 'src/components/atoms/Button';

// Utils
import { removeHyphensAndMakeCamelCase } from 'src/utils/helper';

// Data
import {
  ChartOfAccountsTypeTableColumns,
  ChartOfAccountsTypeTableRows,
} from 'src/data/dummyData';

const ChartOfAccountsSubType = () => {
  const { t } = useTranslation();
  const params = useParams();

  const pagesTrackList = useMemo(
    () => [
      { index: 1, name: t('entities') },
      {
        index: 2,
        name: removeHyphensAndMakeCamelCase(params.entityName ?? ''),
      },
      {
        index: 3,
        name: t('chartOfAccounts'),
      },
      {
        index: 4,
        name: removeHyphensAndMakeCamelCase(params.reportType ?? ''),
      },
    ],
    [params, t]
  );

  return (
    <>
      <PagesTrack pagesTrackList={pagesTrackList} />

      <div className="my-8">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground sm:text-2xl"
        >
          {removeHyphensAndMakeCamelCase(params.reportType ?? '')}
        </Text>

        <Text
          containerTag="h5"
          className="text-sm text-default-500 sm:text-base"
        >
          {t('enterRequiredInformationConcileManually')}
        </Text>
      </div>

      <div className="mb-6">
        <Text
          containerTag="h5"
          className="text-lg font-semibold text-foreground"
        >
          {t('unreconciledBankTransactions')}
        </Text>

        <Divider className="mb-6 mt-5" />

        <CustomTable
          columns={ChartOfAccountsTypeTableColumns}
          rows={ChartOfAccountsTypeTableRows}
          showPagination={false}
        />
      </div>

      <Text
        containerTag="h5"
        className="mb-1 text-lg font-semibold text-foreground"
      >
        {t('unreconciledProcessorTransactions')}
      </Text>

      <Text containerTag="h5" className="mb-5 text-base text-default-500">
        {t(
          'SelectTheUnreconciledProcessorTransactionsThatPartofReconciliationForTheTransactionListedAboveTheseTransactionsarePulledFromFeedsThatMatchTheBankWithTheProcessor'
        )}
      </Text>

      <Divider className="mb-8" />

      <CustomTable
        columns={ChartOfAccountsTypeTableColumns}
        rows={ChartOfAccountsTypeTableRows}
        showPagination={false}
      />

      <div className="mt-3 flex w-full items-center justify-between rounded-xl border border-default-200 px-7 py-3 shadow-md">
        <Text
          containerTag="h5"
          className="text-sm font-semibold text-foreground"
        >
          {t('remainingUnreconciledBalance')}
        </Text>

        <Text containerTag="h5" className="text-sm font-normal text-danger">
          $4,000.00
        </Text>
      </div>

      <Divider className="my-8" />

      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex-1">
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('journalEntryPreview')}
          </Text>

          <Text
            containerTag="h5"
            className="text-sm text-default-500 sm:text-base"
          >
            {t(
              'ThisIsJournalEntryPreviewAddManyJournalEntriesAsNeededToReconcileTheTransactionQuestionJournalEntriesWillOnlyBeSavedOnceYouClickTheSave'
            )}
          </Text>
        </div>

        <CustomButton>{t('addJournalEntry')}</CustomButton>
      </div>

      <Divider className="mb-6 mt-5" />

      <CustomTable
        columns={ChartOfAccountsTypeTableColumns}
        rows={ChartOfAccountsTypeTableRows}
        showPagination={false}
      />

      <Divider className="my-8" />

      <div className="flex w-full items-center justify-between">
        <Text
          containerTag="h5"
          className="text-sm font-semibold text-foreground"
        >
          {t('remainingUnreconciledBalance')}:
          <Text containerTag="span" className="ml-1 text-danger">
            $4,000.00
          </Text>
        </Text>

        <CustomButton>{t('saveJournalEntries')}</CustomButton>
      </div>
    </>
  );
};

export default ChartOfAccountsSubType;
