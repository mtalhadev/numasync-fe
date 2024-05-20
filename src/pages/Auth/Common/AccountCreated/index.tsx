import { useNavigate } from 'react-router-dom';

// Components
import AuthLayout from 'src/components/layout/AuthLayout';
import TickStatus from 'src/components/molecules/TickStatus';

// Data
import { LINKS } from 'src/data/links';

const AccountCreated = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout key="accountCreated">
      <TickStatus
        title="accountCreated"
        subtitle="yourAccountHasBeenCreatedAndReadyToUse"
        buttonTitle="getStarted"
        onButtonClick={() => {
          navigate(LINKS.EXPIRED_LINK);
        }}
      />
    </AuthLayout>
  );
};

export default AccountCreated;
