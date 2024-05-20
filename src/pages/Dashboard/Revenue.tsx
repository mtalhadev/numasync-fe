// i18n
import { useTranslation } from 'react-i18next';

// Icons
import { Import, TrendUp } from 'iconsax-react';

// Data
import { RevenueCards, RevenueCountryCards } from 'src/data/dummyData';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import GraphCard from 'src/components/molecules/GraphCard';
import CountryCard from 'src/components/molecules/CountryCards';
import RevenueMapBox from 'src/components/molecules/RevenueMapBox';
import { cn } from 'src/utils/cn';
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
} from 'src/utils/constants';

const Revenue = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('revenue')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('trackYouRevenueDetailsHere')}
          </Text>
        </div>
        <CustomButton
          leadingIcon={<Import size="22" />}
          className="text-xs sm:text-sm"
        >
          {t('export')}
        </CustomButton>
      </div>

      <Text
        containerTag="h4"
        className="mb-2 text-sm font-normal text-foreground sm:text-base"
      >
        {t('totalRevenue')}
      </Text>

      <Text
        containerTag="h2"
        className="flex text-2xl font-semibold text-foreground  xs:text-3xl sm:text-4xl"
      >
        <Text
          containerTag="span"
          className="mr-[2px] text-lg font-normal sm:text-xl"
        >
          $
        </Text>
        <Text containerTag="span" className="text-xl sm:text-3xl">
          18,880
        </Text>
        <Text
          containerTag="span"
          className="ml-2 flex items-center text-xs font-medium text-success-700 sm:text-sm"
        >
          <TrendUp className="mr-1 text-success-500" size={20} />
          7.4%
        </Text>
      </Text>

      <Divider className="mb-8 mt-3" />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-5 overflow-hidden">
        {RevenueCards.map(item => {
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

      <div className="rounded-xl border border-default-100 p-5">
        <Text containerTag="h4" className="text-base font-medium sm:text-lg">
          {t('totalNoOfSubscriptions')}
        </Text>

        <Divider className="my-5" />

        <div className="flex items-center gap-16">
          <div className="bg-default-1000 h-[340px] flex-[3] overflow-hidden">
            <RevenueMapBox />
          </div>

          <div className="flex-1">
            <Text containerTag="h1" className="mb-5 text-4xl font-semibold">
              10.8k
            </Text>

            <div className="flex w-full flex-col gap-3">
              {RevenueCountryCards.map((item, index) => {
                return <CountryCard {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
