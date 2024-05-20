// React Otp Input
import OTPInput from 'react-otp-input';

// Types
import { OptInputTypes } from 'src/types/optInputTypes';

// Theme
import { useTheme } from 'next-themes';

const OtpCustomInput = (props: OptInputTypes) => {
  const { theme } = useTheme();

  const { numInputs, placeholder, inputType, onChange, value, error } = props;

  const containerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '8px',
    justifyContent: 'center',
  };

  const inputStyle = {
    width: '64px',
    height: '64px',
    borderRadius: '8px',
    borderColor: `${error ? '#F04438' : `${theme === 'numa-light' ? '#E4E4E7' : '#3F3F46'}`}`,
    backgroundColor: `${error ? '#F044381A' : `${theme === 'numa-light' ? '#FFFFFF' : '#161B26'}`}`,
    borderWidth: '1px',
    fontSize: '48px',
    fontWeight: 500,
    outline: 'none',
    boxShadow: '0px 1px 2px 0px #1018280D',
  };

  return (
    <>
      <OTPInput
        value={value}
        onChange={onChange}
        numInputs={numInputs || 6}
        inputType={inputType || 'number'}
        placeholder={placeholder || '000000'}
        renderInput={(props) => <input {...props} className="text-center focus-within:border-primary " />}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
      />
    </>
  );
};

export default OtpCustomInput;
