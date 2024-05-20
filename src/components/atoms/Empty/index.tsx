import Text from '../Text';

// i18n
import { useTranslation } from 'react-i18next';

// Assets
import { Empty as EmptyImage } from 'src/assets/svg';

const Empty = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center gap-3">
      <img src={EmptyImage} alt="" />
      <Text containerTag="p" className="text-default-400 sm:text-base text-sm">
        {t('nodataFound')}
      </Text>
    </div>
  );
};

export default Empty;
