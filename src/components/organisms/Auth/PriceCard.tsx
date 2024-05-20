import React from 'react';

// Icons
import { TickCircle } from 'iconsax-react';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';

// Utils
import { showToast } from 'src/utils/toast';

// i18n
import { useTranslation } from 'react-i18next';

interface PlanItem {
  title: string;
  price: string;
  validity: string;
  features: string[];
}

interface PriceCardProps {
  plan: PlanItem;
  onNext?: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: string | null;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan, selectedPlan, setSelectedPlan }) => {
  const { t } = useTranslation();
  const isEnterprise = plan.title === 'Enterprise';
  const subtitle = isEnterprise ? 'Custom Plan' : `$${plan.price}/${plan.validity === 'monthly' ? 'mo' : 'yr'}`;

  return (
    <div
      className={`shadow-box flex flex-col justify-between rounded-[10px] border-2 border-solid bg-background cursor-pointer ${selectedPlan === plan.title ? 'border-primary' : 'border-default-100'}`}
      onClick={() => setSelectedPlan(plan.title)}
    >
      <div className="text-center pt-5 px-4">
        <Text containerTag="h3" className="text-xl font-semibold text-foreground">
          {plan.title}
        </Text>

        <Text containerTag="p" className="text-base text-default-500">
          {subtitle}
        </Text>
      </div>
      {isEnterprise ? (
        <div className="p-4 sm:text-left text-center">
          <Text containerTag="p" className="mb-2 font-light">
            {t('wantACustomPlan')}
          </Text>
          <Text containerTag="p" className="mb-2 font-light">
            {t('weAreReadyToServe')}
          </Text>

          <CustomButton
            fullWidth
            onClick={() => {
              showToast({
                message: 'Contact sales to get a custom plan',
              });
            }}
            className="mt-2 h-10 w-full text-base"
            radius="lg"
            variant="bordered"
          >
            {t('contactSales')}
          </CustomButton>
        </div>
      ) : (
        <ul className="flex-grow p-4">
          {plan.features.map((feature, index) => (
            <li
              className="mb-2 flex items-center sm:justify-start justify-center gap-1 text-base text-default-500"
              key={`feature-${index}`}
            >
              <TickCircle size="24" className="text-success-500 h-6 w-6 md:basis-2/12" />
              <Text containerTag="p" className="md:basis-4/5">
                {feature}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PriceCard;
