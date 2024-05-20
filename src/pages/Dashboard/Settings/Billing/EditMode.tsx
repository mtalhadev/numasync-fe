import { zodResolver } from '@hookform/resolvers/zod/src/zod';
import { Add } from 'iconsax-react';
import { Dispatch, FC, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Visa } from 'src/assets/images';
import CustomButton from 'src/components/atoms/Button';
import CheckBox from 'src/components/atoms/Checkbox';
import Divider from 'src/components/atoms/Divider';
import Text from 'src/components/atoms/Text';
import PaymentMethodCard from 'src/components/molecules/PaymentMethodCard';
import PlanCard from 'src/components/molecules/PlanCard';
import { DummyPaymentMethodsData } from 'src/data/dummyData';
import { EditSettingsBilling } from 'src/schema/editSettingsBilling.schema';
import { PaymentMethodsTypes, PlanTypes } from 'src/types/commonTypes';
import { PlanData } from 'src/utils/constants';

interface EditModeProps {
  selectedPlan: PlanTypes;
  setSelectedPlan: Dispatch<SetStateAction<PlanTypes | undefined>>;
  selectedAddOn: PlanTypes;
  setSelectedAddOn: Dispatch<SetStateAction<PlanTypes | undefined>>;
  selectedPayment: PaymentMethodsTypes;
  setSelectedPayment: Dispatch<SetStateAction<PaymentMethodsTypes | undefined>>;
}

const EditMode: FC<EditModeProps> = ({
  selectedPlan,
  setSelectedPlan,
  selectedAddOn,
  setSelectedAddOn,
  selectedPayment,
  setSelectedPayment,
}) => {
  const { t } = useTranslation();
  const { setValue } = useForm<EditSettingsBilling>({
    resolver: zodResolver(EditSettingsBilling),
  });

  return (
    <div>
      {/* Plan Cards */}
      <div className="flex flex-col gap-4 md:flex-row">
        {PlanData.map(plan => {
          const isPlanSelected = selectedPlan?.id === plan.id;
          return (
            <PlanCard
              key={plan.id}
              item={plan}
              isSelected={isPlanSelected}
              onClick={(item: PlanTypes) => {
                if (isPlanSelected) {
                  setSelectedPlan(undefined);
                  setValue('plan', '');
                } else {
                  setSelectedPlan(item);
                  setValue('plan', item.id);
                }
              }}
            />
          );
        })}
      </div>

      <div className="mt-8">
        <Text
          containerTag="h1"
          className="mb-1 text-lg font-semibold leading-8 text-foreground"
        >
          {t('addOns')}
        </Text>

        <Text
          containerTag="h4"
          className="text-sm font-normal text-default-500"
        >
          {t('updateOrPickPlanThatWorksBestForYou')}
        </Text>
      </div>

      <Divider className="mb-6 mt-5" />

      {/* AddOns Cards */}
      <div className="flex flex-col gap-4 md:flex-row">
        {PlanData.map(plan => {
          const isAddOnSelected = selectedAddOn?.id === plan.id;
          return (
            <PlanCard
              key={plan.id}
              item={plan}
              isSelected={isAddOnSelected}
              onClick={(item: PlanTypes) => {
                if (isAddOnSelected) {
                  setSelectedAddOn(undefined);
                  setValue('addOn', '');
                } else {
                  setSelectedAddOn(item);
                  setValue('addOn', item.id);
                }
              }}
            />
          );
        })}
      </div>

      <Divider className="mb-6 mt-5" />

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

      <div className="flex flex-col gap-4 md:flex-row">
        {DummyPaymentMethodsData.map(paymentMethod => {
          const isPaymentSelected = selectedPayment?.id === paymentMethod.id;
          return (
            <PaymentMethodCard
              key={paymentMethod.id}
              paymentMethod={paymentMethod}
              isSelected={isPaymentSelected}
              onClick={(item: PaymentMethodsTypes) => {
                if (isPaymentSelected) {
                  setSelectedPayment(undefined);
                  setValue('paymentMethod', '');
                } else {
                  setSelectedPayment(item);
                  setValue('paymentMethod', item.id);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditMode;
