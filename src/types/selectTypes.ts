import { ChangeEvent } from 'react';
import { FieldErrors } from 'react-hook-form';

export type SelectPropsTypes = {
  label: string;
  disabled?: boolean;
  options: SelectOption[];
  fullWidth?: boolean;
  size?: 'lg' | 'md' | 'sm';
  field?: {
    name: string;
    value: string;
    onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  value?: string;
  errors?: FieldErrors | undefined;
  onChange?: (_e: ChangeEvent<HTMLInputElement>) => void;
  variant?: 'bordered' | 'faded' | 'underlined' | 'flat';
  color?: 'primary' | 'default' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
};

export type SelectOption = {
  label: string;
  value: string;
  src?: string;
  leadingIcon?: React.ReactNode;
};
