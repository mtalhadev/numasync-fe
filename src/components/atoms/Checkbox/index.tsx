import { Checkbox } from '@nextui-org/react';

// Types
import { CheckboxPropsTypes } from 'src/types/checkboxTypes';
import Text from '../Text';

const CheckBox = ({
  defaultSelected = false,
  size,
  color,
  children,
  field,
  errors,
  name,
  label,
}: CheckboxPropsTypes) => {
  const handleChange = (newValue: boolean) => {
    field?.onChange && field?.onChange(newValue);
  };

  return (
    <Checkbox
      name={name}
      defaultSelected={defaultSelected}
      size={size || 'md'}
      color={color || 'primary'}
      onValueChange={handleChange}
      isSelected={field?.value || false}
      classNames={{
        wrapper: [
          `${errors && errors[name] ? 'bg-lightPink border-danger-500 before:border-none' : 'bg-transparent border-default-200'}`,
        ],
        // 'border-2',
      }}
    >
      {label && (
        <Text containerTag="p" className="text-small">
          {label}
        </Text>
      )}
      {children}
    </Checkbox>
  );
};

export default CheckBox;
