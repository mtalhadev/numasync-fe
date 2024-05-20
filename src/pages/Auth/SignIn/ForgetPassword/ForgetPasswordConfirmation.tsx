import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Components
import SecoundaryButton from 'src/components/atoms/SecondaryButton';
import Text from 'src/components/atoms/Text';
import AuthLayout from 'src/components/layout/AuthLayout';

// Data
import { LABELS } from 'src/data/labels';
import { LINKS } from 'src/data/links';

// Toast
import { showToast } from 'src/utils/toast';

interface IndexProps {
  email?: string;
}

const ForgetPasswordConfirmation: React.FC<IndexProps> = ({ email }) => {
  const [time, setTime] = useState(60);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(
      () => setTime(prev => (prev !== 0 ? prev - 1 : 0)),
      1000
    );

    if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  const handleResendEmail = () => {
    showToast({ message: 'Email Sent Successfully' });
  };

  return (
    <AuthLayout key="forgetPasswordConfirmation">
      <div className="mx-auto w-full">
        <Text
          containerTag="h3"
          className="text-text-xl text-center font-semibold text-foreground md:text-4xl"
        >
          {LABELS.checkYourEmail}
        </Text>

        <Text
          containerTag="p"
          className="mt-3 text-center text-base text-default-500"
        >
          {LABELS.ifAnAccountExistsWithTheEmail}
        </Text>

        <Text
          containerTag="p"
          className="mt-1 text-center text-base font-semibold text-default-500"
        >
          {email}
        </Text>

        {/* <CustomButton
          type="submit"
          fullWidth
          className="mt-8 mb-6"
          onClick={() => {
            window.open('mailto: ' + email);
          }}
        >
          {LABELS.openEmailApp}
        </CustomButton> */}

        <Text
          containerTag="p"
          className="mt-5 text-center text-small text-default-500"
        >
          {LABELS.didNotReceiveTheEmail}
        </Text>

        <div className="mb-6 flex flex-row items-center justify-center gap-1">
          <SecoundaryButton
            size="sm"
            onClick={handleResendEmail}
            disabled={time !== 0}
          >
            {LABELS.clickToResend}
          </SecoundaryButton>
          {time !== 0 && (
            <Text
              containerTag="p"
              className="flex items-center gap-1 text-small text-default-500"
            >
              {t('after')}{' '}
              <Text containerTag="p" className="font-semibold">
                {time}
              </Text>{' '}
              {t('seconds')}
            </Text>
          )}
        </div>

        <div className="flex items-center justify-center">
          <Link to={LINKS.LOGIN}>
            <SecoundaryButton size="sm">{LABELS.backToLogIn}</SecoundaryButton>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgetPasswordConfirmation;
