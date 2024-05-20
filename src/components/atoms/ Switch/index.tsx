import { useState } from 'react';

// Next UI
import { Switch as NextUiSwitch } from '@nextui-org/react';
import { SwitchPropsType } from 'src/types/switchPropsType';

// Components
import Text from '../Text';

// i18n
import { useTranslation } from 'react-i18next';

const Switch = ({
  size = 'md',
  color = 'primary',
  startContent,
  endContent,
  onValueChange,
  isSelected,
  showText,
}: SwitchPropsType) => {
  const { t } = useTranslation();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onChange = (value: boolean) => {
    onValueChange && onValueChange(value);
    setIsSwitchOn(value);
  };

  return (
    <div className="flex items-center gap-2">
      <NextUiSwitch
        size={size}
        color={color}
        startContent={startContent}
        endContent={endContent}
        onValueChange={onChange}
        isSelected={isSelected}
      ></NextUiSwitch>

      {showText && (
        <Text containerTag="h4" className="text-sm font-medium text-foreground">
          {isSwitchOn ? t('on') : t('off')}
        </Text>
      )}
    </div>
  );
};

export default Switch;
