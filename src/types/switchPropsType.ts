export interface SwitchPropsType {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onValueChange?: (_val: boolean) => void;
  isSelected?: boolean;
  showText?: boolean;
}
