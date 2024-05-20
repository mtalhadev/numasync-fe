import { useNavigate } from 'react-router-dom';

// Components
import AuthLayout from 'src/components/layout/AuthLayout';
import TickStatus from 'src/components/molecules/TickStatus';

// Data
import { LINKS } from 'src/data/links';

const SetupComplete = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout key="setupComplete">
      <TickStatus
        title="setupComplete"
        subtitle="yourWorkspaceHasBeenCreatedReady"
        buttonTitle="getStarted"
        onButtonClick={() => {
          navigate(LINKS.EXPIRED_LINK);
        }}
      />
    </AuthLayout>
  );
};

export default SetupComplete;
