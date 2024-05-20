export type OptInputTypes = {
  numInputs?: number;
  placeholder?: string;
  inputType?: 'number' | 'password' | 'tel' | 'text';
  onChange: (_otp: string) => void;
  value: string;
  error?: boolean;
};
