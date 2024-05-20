import React, { useState } from 'react';

// Images
import { QrCode } from 'assets/images';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import AuthFormScroll from 'src/components/layout/AuthLayout/AuthFormScroll';
import OtpCustomInput from 'src/components/atoms/optInput';

// Data
import { LABELS } from 'src/data/labels';

interface IndexProps {
  qrCode?: boolean;
  onNext: () => void;
}

const TwoFactorAuth: React.FC<IndexProps> = ({ onNext, qrCode }) => {
  const [otpCode, setOtpCode] = useState<string>('');
  const [optError, setOptError] = useState<boolean>(false);

  const handleChange = (otp: string) => {
    if (otp.length == 6) {
      setOptError(false);
    }
    setOtpCode(otp);
  };

  const onSubmit = () => {
    if (otpCode.length < 6) {
      setOptError(true);
      return;
    }

    setOptError(false);
    onNext();
  };

  return (
    <AuthFormScroll>
      <div className="mb-8 text-center">
        <Text containerTag="h5" className="text-2xl font-semibold text-foreground md:text-4xl">
          {LABELS.faCode}
        </Text>
        <Text containerTag="p" className="text-base text-default-500 mt-3">
          {LABELS.pleaseprovideThe6digitSecurity}
        </Text>

        {qrCode && <img src={QrCode} alt="" className="my-8 mx-auto" width={120} height={120} />}
      </div>

      <OtpCustomInput onChange={handleChange} value={otpCode} error={optError} />

      <CustomButton size="lg" className="mt-8" fullWidth onClick={onSubmit}>
        Submit
      </CustomButton>
    </AuthFormScroll>
  );
};

export default TwoFactorAuth;
