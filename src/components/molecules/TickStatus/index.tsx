// Icons
import { TickCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import AuthFormScroll from 'src/components/layout/AuthLayout/AuthFormScroll';

interface TickStatusProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  onButtonClick: () => void;
}

const TickStatus: React.FC<TickStatusProps> = ({ title, subtitle, buttonTitle, onButtonClick }: TickStatusProps) => {
  const { t } = useTranslation();
  return (
    <AuthFormScroll>
      <div className="flex flex-col items-center justify-center w-full">
        <TickCircle size="80" className="text-success-500" />
        <Text containerTag="h5" className="text-2xl font-semibold text-foreground md:text-4xl text-center mt-5">
          {t(title)}
        </Text>
        <Text containerTag="p" className="text-base text-default-500 mt-3 text-center">
          {t(subtitle)}
        </Text>

        <CustomButton className="mt-8" onClick={() => onButtonClick && onButtonClick()} size="lg" fullWidth>
          {t(buttonTitle)}
        </CustomButton>
      </div>
    </AuthFormScroll>
  );
};

export default TickStatus;
