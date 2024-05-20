// Icons
import { ArrowDown, ArrowUp, InfoCircle } from 'iconsax-react';

// Assets
import CustomSkeleton from 'src/components/atoms/Skeleton';

// Components
import Text from 'src/components/atoms/Text';
import Chart from 'src/components/atoms/Chart';

// Data
import { LABELS } from 'src/data/labels';

// Utils
import { GRAPH_TYPE, SKELETON_VARIANT } from 'src/utils/enums';
import { useTranslation } from 'react-i18next';

export interface GraphCardProps {
  type: GRAPH_TYPE;
  title: string;
  value: number | string;
  increasePercent: number;
  isLoading?: boolean;
  showInfoIcon?: boolean;
}

const GraphCard: React.FC<GraphCardProps> = ({
  type,
  title,
  value,
  increasePercent,
  isLoading = false,
  showInfoIcon = true,
}: GraphCardProps) => {
  const { t } = useTranslation();

  if (isLoading) return <CustomSkeleton variant={SKELETON_VARIANT.CARD} />;

  return (
    // min-w-[370px]
    <div className="w-full rounded-xl border border-default-100 p-4 shadow-sm">
      <div className="flex justify-between">
        <Text
          containerTag="h4"
          className="mb-3 text-[10px] font-normal leading-6 text-foreground sm:text-xs md:text-sm"
        >
          {t(`${title}`)}
        </Text>

        {showInfoIcon && type === GRAPH_TYPE.DECREASING && (
          <InfoCircle size="20" className="text-danger-400" />
        )}
      </div>

      <div className="flex items-end justify-between gap-3 sm:gap-5">
        <div className="flex flex-col items-start">
          <Text
            containerTag="h2"
            className="mb-4 text-lg font-semibold leading-10 text-foreground sm:text-xl md:text-2xl"
          >
            {value}
          </Text>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap">
            <div className="flex items-center justify-center gap-1">
              {type === GRAPH_TYPE.INCREASING ? (
                <ArrowUp size="20" className={'text-success-400'} />
              ) : (
                <ArrowDown size="20" className={'text-danger-400'} />
              )}
              <Text
                containerTag="h5"
                className={`text-sm font-medium leading-5 ${type === GRAPH_TYPE.INCREASING ? 'text-success-400' : 'text-danger-400'} `}
              >
                {increasePercent}%
              </Text>
            </div>
            <Text containerTag="h5">{LABELS.vsLastMonth}</Text>
          </div>
        </div>

        <div className="h-20 w-36">
          <Chart type={type} />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
