import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import PriceCard from 'src/components/organisms/Auth/PriceCard';
import Toggle from './Toggle';

// Utils
import AuthLayout from 'src/components/layout/AuthLayout';
import { plans } from 'src/utils/subscriptionConst';

// i18n
import { useTranslation } from 'react-i18next';
import { LINKS } from 'src/data/links';

const SubscriptionPlan = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [selected, setSelected] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const goToNextPage = () => {
    if (selectedPlan !== null) {
      navigate(LINKS.WORKSPACE_BILLING);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        goToNextPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlan]);

  return (
    <AuthLayout key="subscription-plan" className="!max-w-full px-7" canGoBack>
      <div className="mb-5 text-center">
        <Text containerTag="h5" className="text-2xl font-semibold text-foreground md:text-4xl">
          {t('subscriptionPlan')}
        </Text>

        <Text containerTag="p" className="text-base text-default-500 mt-3 font-light">
          {t('chooseTheSubscriptionPlanThatSuitsYouTheBest')}
        </Text>
      </div>
      <div className="mt-1">
        <Toggle selected={selected} setSelected={setSelected} />
        <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 ">
          {plans
            .filter((plan) => plan.validity === selected)
            .map((plan, index) => (
              <PriceCard key={index} plan={plan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
            ))}
        </div>
        <div className="mt-8 max-w-[440px] mx-auto">
          <CustomButton size="lg" type="submit" fullWidth disabled={selectedPlan === null} onClick={goToNextPage}>
            {t('next')}
          </CustomButton>
        </div>
      </div>
      <button
        type="button"
        className="text-sm font-medium text-primary mx-auto block underline underline-offset-4 mt-6"
        onClick={() => {
          navigate(LINKS.LOGIN);
        }}
      >
        {t('viewFullFeatureComparison')}
      </button>
    </AuthLayout>
  );
};

export default SubscriptionPlan;
