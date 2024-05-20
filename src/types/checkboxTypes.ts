import { ChangeEvent } from 'react';
import { FieldErrors } from 'react-hook-form';

export type CheckboxPropsTypes = {
  disabled?: boolean;
  defaultSelected?: boolean;
  children?: React.ReactNode;
  field?: {
    name?: string;
    value?: boolean | undefined;
    onChange?: (_e: boolean) => void;
    onBlur?: (_e: ChangeEvent<HTMLInputElement>) => void;
  };
  errors?: FieldErrors | undefined;
  name: string;
  size?: 'lg' | 'md' | 'sm';
  color?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  label?: string;
};
