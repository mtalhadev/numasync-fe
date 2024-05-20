import { useCallback, useEffect, useState } from 'react';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import OtpCustomInput from 'src/components/atoms/optInput';
import AuthLayout from 'src/components/layout/AuthLayout';

// Data
import { useNavigate } from 'react-router-dom';
import { LABELS } from 'src/data/labels';
import { LINKS } from 'src/data/links';

// i18n
import { useTranslation } from 'react-i18next';

const TwoFactorAuth = () => {
  const identityVerification = true;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [otpCode, setOtpCode] = useState<string>('');
  const [optError, setOptError] = useState<boolean>(false);

  const handleChange = (otp: string) => {
    if (otp.length == 6) {
      setOptError(false);
    }
    setOtpCode(otp);
  };

  const onSubmit = useCallback(() => {
    if (otpCode.length < 6) {
      setOptError(true);
      return;
    }
    setOptError(false);
    navigate(LINKS.WORKSPACE_CREATE);
  }, [navigate, otpCode.length]);

  useEffect(() => {
    if (otpCode.length === 6) {
      onSubmit();
    }
  }, [otpCode, onSubmit]);

  return (
    <AuthLayout canGoBack key="twoFactorAuth">
      <div className="mb-8 text-center">
        <Text
          containerTag="h5"
          className="text-2xl font-semibold text-foreground md:text-4xl"
        >
          {identityVerification ? t('identityVerification') : t('faCode')}
        </Text>
        <Text
          containerTag="p"
          className="mt-3 text-base font-normal text-default-500"
        >
          {identityVerification
            ? t(
                'anEmailWasSentAddressYouProvidedPleaseEnterToVerifyYourIdentity'
              )
            : t('pleaseprovideThe6digitSecurity')}
        </Text>
      </div>

      <OtpCustomInput
        onChange={handleChange}
        value={otpCode}
        error={optError}
      />

      <CustomButton
        size="lg"
        className="mt-8"
        fullWidth
        onClick={onSubmit}
        disabled={otpCode.length < 6}
      >
        {LABELS.submit}
      </CustomButton>
    </AuthLayout>
  );
};

export default TwoFactorAuth;
