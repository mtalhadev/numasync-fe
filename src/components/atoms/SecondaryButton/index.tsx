import { ButtonPropsType } from 'src/types/buttonTypes';

const SecoundaryButton = (props: ButtonPropsType) => {
  const {
    type,
    size,
    color,
    fullWidth,
    radius,
    disabled,
    className: extraClass,
    children,
    onClick,
    fontWeigth,
    bgColor,
    padding,
  } = props;

  const fontSize = size === 'sm' ? 'text-small' : size === 'md' ? 'text-medium' : size === 'lg' ? 'text-large' : '';

  const className = `${extraClass} underline select-none underline-offset-4 hover:opacity-65 hover:bg-transparent
  ${size ? fontSize : 'text-small'}
  ${color ? color : 'text-primary'}
  ${fullWidth ? 'w-full' : 'w-max'}
  ${radius ? radius : 'rounded-none'}
  ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  ${fontWeigth ? fontWeigth : 'font-medium'}
  ${padding ? padding : 'p-0'}
  ${bgColor ? bgColor : 'bg-transparent'}`;

  return (
    <button type={type || 'button'} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default SecoundaryButton;
