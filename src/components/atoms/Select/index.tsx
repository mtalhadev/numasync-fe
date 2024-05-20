// Next UI
import { Avatar, Select, SelectItem } from '@nextui-org/react';

// Types
import { SelectOption, SelectPropsTypes } from 'src/types/selectTypes';

// Components
import Text from '../Text';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const SelectInput = (props: SelectPropsTypes) => {
  const {
    label,
    disabled,
    field,
    errors,
    options,
    fullWidth,
    variant,
    color,
    size,
    onChange,
    value,
  } = props;
  const { t } = useTranslation();

  const styles = {
    label: 'text-default-400',
    input: ['placeholder:text-default-400'],
    mainWrapper: [
      `${errors && field && errors[field.name] ? 'bg-lightPink border-danger-500' : 'bg-transparent border-default-200'}`,
      'rounded-xl',
      'transition-colors',
    ],
    listbox: ['border-default-200'],
    trigger: ['border-default-200', 'rounded-xl', 'border'],
  };

  return (
    <>
      <Select
        variant={variant || 'bordered'}
        color={color || 'primary'}
        label={label}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={e => {
          field?.onChange(e as unknown as ChangeEvent<HTMLInputElement>);
          onChange?.(e as unknown as ChangeEvent<HTMLInputElement>);
        }}
        selectedKeys={
          value ? [value] : field?.value ? [field.value] : undefined
        }
        // onBlur={() => field.onBlur()}
        size={size || 'sm'}
        classNames={{ ...styles }}
      >
        {options?.map((option: SelectOption) => (
          <SelectItem
            key={option.value}
            value={option.value}
            startContent={
              option.leadingIcon ? (
                option.leadingIcon
              ) : option?.src ? (
                <Avatar alt="Argentina" className="h-4 w-4" src={option?.src} />
              ) : undefined
            }
          >
            {t(`${option.label}`)}
          </SelectItem>
        ))}
      </Select>

      {errors && field && errors[field.name] && (
        <Text
          containerTag="h6"
          className="ml-2 mt-1 text-xs font-semibold text-danger-500"
        >
          {errors?.[field.name]?.message as string}
        </Text>
      )}
    </>
  );
};

export default SelectInput;
