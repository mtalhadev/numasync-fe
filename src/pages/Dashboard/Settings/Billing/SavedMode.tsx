import { Add } from 'iconsax-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Visa } from 'src/assets/images';
import CustomButton from 'src/components/atoms/Button';
import CheckBox from 'src/components/atoms/Checkbox';
import Divider from 'src/components/atoms/Divider';
import Text from 'src/components/atoms/Text';
import { PlanTypes } from 'src/types/commonTypes';

interface SavedModeProps {
  selectedPlan?: PlanTypes;
}

const SavedMode: FC<SavedModeProps> = ({ selectedPlan }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="rounded-xl border border-default-200 bg-default-50">
        <Text
          containerTag="h1"
          className="p-4 text-base font-semibold text-foreground"
        >
          {t('basicPlan')}
        </Text>

        <div className="border-t border-default-200 p-4">
          <Text
            containerTag="h1"
            className="flex items-center gap-1 text-2xl font-semibold text-foreground"
          >
            $10
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
            {t('includesUpToUsersAndFeedsAvailableInThisPlanBasic')}
          </Text>
        </div>
      </div>

      <Divider className="my-8" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <Text
            containerTag="h1"
            className="mb-1 text-lg font-semibold leading-8 text-foreground"
          >
            {t('paymentMethod')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-normal text-default-500"
          >
            {t('updateOrPickPaymentMethodThatWorksBestForYou')}
          </Text>
        </div>

        <CustomButton className="text-sm" leadingIcon={<Add />}>
          {t('addNewMethod')}
        </CustomButton>
      </div>

      <Divider className="mb-6 mt-5" />

      <div className="flex gap-3 rounded-xl border border-default-200 bg-default-50 p-4">
        <img src={Visa} alt="visa" className="h-8 w-12" />
        <div>
          <Text
            containerTag="h4"
            className="text-sm font-medium text-foreground"
          >
            Visa ending in 1234
          </Text>
          <Text
            containerTag="h6"
            className="mb-2 text-sm font-normal text-default-500"
          >
            Expiry 06/2024
          </Text>

          <CheckBox name="default" label={t('setAsDefault')} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default SavedMode;
