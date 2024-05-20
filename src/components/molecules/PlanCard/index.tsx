import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBox from 'src/components/atoms/Checkbox';
import Text from 'src/components/atoms/Text';
import { PlanTypes } from 'src/types/commonTypes';
import { cn } from 'src/utils/cn';

interface PlanCardProps {
  item: PlanTypes;
  isSelected: boolean;
  onClick: (_item: PlanTypes) => void;
}

const PlanCard: FC<PlanCardProps> = ({ item, isSelected, onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'cursor-pointer rounded-xl',
        isSelected ? 'border-2 border-primary' : 'border border-default-200'
      )}
      onClick={() => onClick(item)}
    >
      <div
        className={cn(
          'flex items-center justify-between p-4',
          isSelected
            ? 'border-b-2 border-primary'
            : 'border-b border-default-200'
        )}
      >
        <Text containerTag="h3">{t(`${item.title}`)}</Text>

        <CheckBox
          field={{
            name: 'plan',
            value: isSelected,
            onChange: () => onClick(item),
            onBlur: () => onClick(item),
          }}
          name="plan"
        />
      </div>
      <div className="p-4">
        <Text
          containerTag="h1"
          className="flex items-center gap-1 text-2xl font-semibold text-foreground"
        >
          {t(`${item.amount}`)}
          <Text
            containerTag="span"
            className="text-sm font-normal text-default-500"
          >
            {t('perMonth')}
          </Text>
        </Text>

        <Text
          containerTag="h6"
          className="text-sm font-normal text-default-500"
        >
          {t(`${item.description}`)}
        </Text>
      </div>
    </div>
  );
};

export default PlanCard;
