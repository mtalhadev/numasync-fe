'use client';

import { useMemo, useState } from 'react';

// Next UI
import { Input } from '@nextui-org/react';

// Iconsax
import { CloseCircle, Eye, EyeSlash } from 'iconsax-react';

// Types
import { InputFieldType } from 'src/types/inputTypes';

// Components
import Text from '../Text';
import { cn } from 'src/utils/cn';

const InputField = (props: InputFieldType) => {
  const {
    widhtFull,
    label,
    type = 'text',
    disabled,
    field,
    errors,
    required,
    className,
    fullWidth,
    variant,
    color,
    width,
    leadingIcon,
    placeholder,
    showErrorMessage = true,
    rigthIcon,
    size,
    onKeyPress,
    suggestionsList,
    renderSuggestionItem,
    selectedSuggestions,
    setSelectedSuggestions,
    selectedSuggestionVariant = 'multiple',
    setSelectedSuggestion,
    showSuggestions = true,
    setShowSuggestions,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const labelText = required ? `${label}*` : label;
  const inputType =
    type === 'password' ? (isVisible ? 'text' : 'password') : type;

  const styles = {
    label: `${className?.label} text-default-400`,
    input: [
      'text-foreground sm:text-sm text-xs',
      'placeholder:text-default-400',
      className?.input,
    ],
    inputWrapper: [
      className?.inputWrapper,
      'sm:h-[50px] h-[45px]',
      `${errors && errors[field.name] ? 'bg-lightPink' : 'bg-transparent'}`,
      `${errors && errors[field.name] ? 'border-danger-500 data-[hover=true]:border-danger-500 group-data-[focus=true]:border-danger-500' : 'data-[hover=true]:border-primary group-data-[focus=true]:border-primary'}`,
      'border',
      'rounded-xl',
      'transition-colors',
      'group-data-[focus-within=true]:ring-offset-0',
      'group-data-[invalid=true]:border-danger',
      selectedSuggestions ? 'min-h-[50px] sm:h-full h-full' : '',
    ],
    innerWrapper: selectedSuggestions ? ['flex-wrap gap-2'] : [],
  };

  const suggestions = useMemo(() => {
    if (suggestionsList && field.value && showSuggestions) {
      return suggestionsList.filter(
        item =>
          item.name
            .toLowerCase()
            .includes((field.value as string).toLowerCase()) ||
          item.value
            .toLowerCase()
            .includes((field.value as string).toLowerCase())
      );
    }
    return [];
  }, [suggestionsList, field.value, showSuggestions]);

  const PasswordShow = () => (
    <button
      onClick={() => setIsVisible(!isVisible)}
      className="h-full focus:outline-none"
      tabIndex={-1}
    >
      {isVisible ? <Eye color="#CDCCCC" /> : <EyeSlash color="#CDCCCC" />}
    </button>
  );

  const endFragment = type === 'password' ? <PasswordShow /> : rigthIcon;

  return (
    <div className={`relative ${widhtFull && 'w-full'}`}>
      <Input
        labelPlacement="inside"
        type={inputType || 'text'}
        label={labelText}
        size={size}
        value={field.value as string}
        onChange={e => {
          field.onChange(e.target.value);
          setShowSuggestions?.(true);
        }}
        onBlur={() => field.onBlur()}
        disabled={disabled}
        classNames={{ ...styles }}
        variant={variant || 'bordered'}
        color={color || 'primary'}
        fullWidth={fullWidth}
        endContent={endFragment}
        width={width}
        startContent={
          selectedSuggestions?.length ? (
            <div className="flex flex-wrap gap-2">
              {selectedSuggestions.map(item => (
                <div
                  key={item.value}
                  className="flex w-fit items-center justify-center gap-2 rounded-full bg-default-100 px-2 py-1"
                >
                  <Text containerTag="p" className="text-xs text-primary-500">
                    {item.name}
                  </Text>
                  <CloseCircle
                    size="16"
                    className="cursor-pointer text-default-500"
                    onClick={() =>
                      setSelectedSuggestions?.(prev =>
                        prev.filter(sg => sg.value !== item.value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            leadingIcon
          )
        }
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />

      {showErrorMessage && errors && errors[field.name] && (
        <Text
          containerTag="h6"
          className="ml-2 mt-1 text-[10px]  font-semibold text-danger-500 sm:text-xs"
        >
          {errors?.[field.name]?.message as string}
        </Text>
      )}

      {suggestions.length > 0 && (
        <div
          className={cn(
            'absolute z-20 mt-1 max-h-44 w-full overflow-y-auto rounded-xl border border-default-200 bg-background px-1 py-2 shadow'
          )}
        >
          {suggestions.map(item => {
            return renderSuggestionItem ? (
              (renderSuggestionItem(item) as React.ReactNode)
            ) : (
              <>
                <Text
                  key={item.value}
                  containerTag="p"
                  className="cursor-pointer rounded-md px-3 py-2 text-base text-default-500 hover:bg-default-100"
                  onClick={() => {
                    if (selectedSuggestionVariant === 'multiple') {
                      setSelectedSuggestions?.(prev => [...prev, item]);
                      field.onChange('');
                    } else {
                      setSelectedSuggestion?.(item);
                    }
                  }}
                >
                  {item.name}
                </Text>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputField;
