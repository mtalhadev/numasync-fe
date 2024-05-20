import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import AddFeedSidePanel from 'src/components/organisms/AddFeedSidePanel';

// Data
import {
  ClientBankFeedTableColumns,
  ClientBankFeedTableRows,
  ClientCRMFeedTableColumns,
  ClientCRMFeedTableRows,
  ClientGatewayFeedTableColumns,
  ClientGatewayFeedTableRows,
  ClientProcessorFeedTableColumns,
  ClientProcessorFeedTableRows,
} from 'src/data/dummyData';

const Feeds = () => {
  const { t } = useTranslation();
  const [isAddFeedPanelOpen, setIsAddFeedPanelOpen] = useState(false);

  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        <div className="">
          <Text
            containerTag="h2"
            className="text-lg font-semibold text-foreground"
          >
            {t('feeds')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('thisFeedsProvideDataOfYourEntityFinancialCalculations')}
          </Text>
        </div>

        <CustomButton onClick={() => setIsAddFeedPanelOpen(true)}>
          {t('addFeed')}
        </CustomButton>
      </div>

      <Divider className="my-5 mb-6" />

      {/* Bank Feeds Table */}
      <Text
        containerTag="h2"
        className="mb-3 text-lg font-semibold text-foreground"
      >
        {t('bankFeeds')}
      </Text>
      <CustomTable
        columns={ClientBankFeedTableColumns}
        rows={ClientBankFeedTableRows}
        showPagination={false}
      />
      <Divider className="my-6" />

      {/* Processor Feeds Table */}
      <Text
        containerTag="h2"
        className="mb-3 text-lg font-semibold text-foreground"
      >
        {t('processorFeeds')}
      </Text>
      <CustomTable
        columns={ClientProcessorFeedTableColumns}
        rows={ClientProcessorFeedTableRows}
        showPagination={false}
      />
      <Divider className="my-6" />

      {/* Gateway Feeds Table */}
      <Text
        containerTag="h2"
        className="mb-3 text-lg font-semibold text-foreground"
      >
        {t('gatewayFeeds')}
      </Text>
      <CustomTable
        columns={ClientGatewayFeedTableColumns}
        rows={ClientGatewayFeedTableRows}
        showPagination={false}
      />
      <Divider className="my-6" />

      {/* CRM Feeds Table */}
      <Text
        containerTag="h2"
        className="mb-3 text-lg font-semibold text-foreground"
      >
        {t('CRMFeeds')}
      </Text>
      <CustomTable
        columns={ClientCRMFeedTableColumns}
        rows={ClientCRMFeedTableRows}
        showPagination={false}
      />
      <Divider className="my-6" />

      {/* Side Panel */}
      <AddFeedSidePanel
        isOpen={isAddFeedPanelOpen}
        setIsOpen={setIsAddFeedPanelOpen}
      />
    </div>
  );
};

export default Feeds;
