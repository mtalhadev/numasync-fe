// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';

// Data
import { RevenueCardDataType } from 'src/types/dummyDataTypes';

const CountryCard = (item: RevenueCardDataType) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 py-1">
      <img
        src={item.image}
        alt="Country flag"
        className="h-6 w-6 flex-1 rounded-full"
      />

      <div className="flex w-full items-end gap-3">
        <div className="w-full">
          <Text
            containerTag="h5"
            className="mb-1 text-sm font-normal text-foreground"
          >
            {t(item.title)}
          </Text>

          <div className="h-2 w-full rounded-lg bg-default-200">
            <div
              style={{ width: item.persentage }}
              className="h-full rounded bg-primary duration-300"
            />
          </div>
        </div>

        <Text
          containerTag="span"
          className="mb-[2px] text-sm font-normal text-foreground"
        >
          {item.persentage}%
        </Text>
      </div>
    </div>
  );
};

export default CountryCard;
