import Text from 'src/components/atoms/Text';

// Types
import { AuthSliderDataTypes } from 'src/types/sliderTypes';

// Translation
import { useTranslation } from 'react-i18next';

const AuthSliderCard = ({ data }: { data: AuthSliderDataTypes }) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center select-none">
      <div>
        <img src={data.img} alt="Numasync Information" width={540} />
      </div>
      <div className="lg:px-20 px-9 text-center">
        <Text containerTag="p" className="text-xl font-semibold text-default-foreground mb-2">
          {t(data.title)}
        </Text>
        <Text containerTag="p" className="text-sm font-light text-default-foreground mb-10">
          {t(data.description)}
        </Text>
      </div>
    </div>
  );
};

export default AuthSliderCard;
