import { useState } from 'react';

// Next UI
import { Divider } from '@nextui-org/react';

// Icons
import { Add } from 'iconsax-react';

// Data
import { GRAPHS, columns, rows } from 'src/data/dummyData';

// Components
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import Text from 'src/components/atoms/Text';
import GraphCard from 'src/components/molecules/GraphCard';
import CustomTable from 'src/components/molecules/Table';
import SidePanel from 'src/components/organisms/SidePanel';
import { useTranslation } from 'react-i18next';
import { cn } from 'src/utils/cn';
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
} from 'src/utils/constants';

const Dashboard = () => {
  const { t } = useTranslation();
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('welcomeBack')}, Joe 👋
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('manageAndTrackYour')} {t('organization')}.
          </Text>
        </div>

        <CustomButton
          leadingIcon={<Add size="22" />}
          className="text-sm"
          onClick={() => setIsAddWidgetOpen(true)}
        >
          {t('addWidget')}
        </CustomButton>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-5 overflow-hidden">
        {GRAPHS.map(item => {
          return (
            <div
              key={item.value}
              className="min-w-full flex-1 overflow-hidden md:min-w-[calc(33%_-_10px)]"
            >
              <GraphCard {...item} />
            </div>
          );
        })}
      </div>

      <Divider className="my-8" />

      <div className="mb-6 flex justify-between">
        <div>
          <Text containerTag="h2" className={cn(pagesTitleFontClasses)}>
            {t('upcomingReports')}
          </Text>
          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('seeAllReportInOnePlace')}
          </Text>
        </div>

        <div>
          <SearchBar />
        </div>
      </div>

      <SidePanel
        isOpen={isAddWidgetOpen}
        setIsOpen={setIsAddWidgetOpen}
        title={t('addWidget')}
        primaryButtonClick={() => {}}
        primaryButtonText={t('save')}
      />

      <CustomTable columns={columns} rows={rows} />
    </div>
  );
};

export default Dashboard;
