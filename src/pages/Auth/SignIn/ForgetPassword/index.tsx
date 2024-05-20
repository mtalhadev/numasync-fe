import { useState } from 'react';

// Components
import ForgetPasswordConfirmation from './ForgetPasswordConfirmation';
import ForgotPasswordForm from './ForgotPasswordForm';

// Framer Motion
import { AnimatePresence } from 'framer-motion';

const ForgetPassword = () => {
  const [forgetEmail, setForgetEmail] = useState<string | null>(null);

  return (
    <>
      <AnimatePresence>
        {forgetEmail ? (
          <ForgetPasswordConfirmation email={forgetEmail} key="ForgetPasswordConfirmation" />
        ) : (
          <ForgotPasswordForm setForgetEmail={setForgetEmail} key="ForgotPasswordForm" />
        )}
      </AnimatePresence>
    </>
  );
};

export default ForgetPassword;
