import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBox from 'src/components/atoms/Checkbox';
import Text from 'src/components/atoms/Text';
import { PaymentMethodsTypes } from 'src/types/commonTypes';

interface PaymentMethodCardProps {
  paymentMethod: PaymentMethodsTypes;
  isSelected: boolean;
  onClick: (_item: PaymentMethodsTypes) => void;
}

const PaymentMethodCard: FC<PaymentMethodCardProps> = ({
  paymentMethod,
  isSelected,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div
      key={paymentMethod.id}
      className="flex basis-1/3 gap-3 rounded-xl border border-default-200 bg-default-50 p-4"
    >
      <img src={paymentMethod.image} alt="visa" className="h-8 w-12" />
      <div>
        <div>
          <Text
            containerTag="h4"
            className="text-sm font-medium text-foreground"
          >
            {paymentMethod.title}
          </Text>
        </div>
        <Text
          containerTag="h6"
          className="mb-2 text-sm font-normal text-default-500"
        >
          Expiry {paymentMethod.expiryDate}
        </Text>

        <CheckBox
          name="default"
          label={t('setAsDefault')}
          size="sm"
          field={{
            name: 'plan',
            value: isSelected,
            onChange: () => onClick(paymentMethod),
            onBlur: () => onClick(paymentMethod),
          }}
        />
      </div>
    </div>
  );
};

export default PaymentMethodCard;
