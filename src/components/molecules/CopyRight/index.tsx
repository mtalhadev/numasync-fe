import Text from 'src/components/atoms/Text';

// i18n
import { useTranslation } from 'react-i18next';

const CopyRight = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full items-center justify-end py-3 sm:text-xs text-[10px] font-medium text-default-400">
      <Text
        containerTag="p"
        className="cursor-pointer border-r-2 border-foreground pr-2 text-default-400 duration-100 hover:text-default-500"
      >
        {t('copyRights')}
      </Text>
      <Text
        containerTag="p"
        className="cursor-pointer border-r-2 border-foreground pl-2 pr-2 text-default-400 duration-100 hover:text-default-500"
      >
        {t('termsOfService')}
      </Text>
      <Text containerTag="p" className="cursor-pointer pl-2 pr-12 text-default-400 duration-100 hover:text-default-500">
        {t('privacyPolicy')}
      </Text>
    </div>
  );
};

export default CopyRight;
