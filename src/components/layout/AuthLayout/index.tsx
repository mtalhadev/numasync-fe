import React, { ReactNode } from 'react';

// Icons
import { ArrowLeft2 } from 'iconsax-react';

// Router
import { useNavigate } from 'react-router-dom';

// Components
import Text from 'src/components/atoms/Text';
import AuthInfoSlides from './AuthInfoSlides';

// Data
import { LABELS } from 'src/data/labels';

// Motion
import { motion } from 'framer-motion';
import { LeadingDarkLogo, LeadingLightLogo } from 'src/assets/svg';
import { useTheme } from 'next-themes';

interface AuthLayoutProps {
  children?: ReactNode;
  showRightLayout?: boolean;
  goBackAction?: () => void;
  canGoBack?: boolean;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  goBackAction,
  canGoBack,
  children,
  showRightLayout = true,
  className,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleBack = () => {
    if (goBackAction) {
      goBackAction();
    }
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`relative w-full overflow-hidden p-4 md:w-1/2 ${!showRightLayout && 'md:w-full'} `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 p-0">
            <img
              src={theme === 'numa-light' ? LeadingDarkLogo : LeadingLightLogo}
              alt="Logo"
              className="h-24 w-48"
            />
          </div>
          {canGoBack && (
            <button
              type="button"
              className="flex items-center text-xs font-normal text-default-900 hover:opacity-75 disabled:opacity-55"
              onClick={handleBack}
            >
              <ArrowLeft2 size="14" className="text-primary" /> {LABELS.goBack}
            </button>
          )}
        </div>
        <motion.div
          className="mx-auto flex h-[calc(100%_-_58px)] w-full items-center justify-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        >
          <div
            className={`${className} flex h-full w-full items-center justify-center sm:max-w-[440px]`}
          >
            <div className="w-full">{children}</div>
          </div>
        </motion.div>
      </div>
      {showRightLayout && (
        <div
          className={`${showRightLayout && 'hidden'} m-4 ml-0 hidden w-1/2 rounded-large bg-gradient-to-tr from-[#002E62] to-[#005BC4] md:block`}
        >
          <div className="h-full w-full p-10">
            <AuthInfoSlides />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
