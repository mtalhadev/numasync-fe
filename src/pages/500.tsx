import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Text from 'src/components/atoms/Text';
import { LINKS } from 'src/data/links';

const InternalServerError500 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="relative flex h-1/2 w-4/5 flex-col items-center justify-center gap-6">
        <Text
          containerTag="h1"
          className="absolute -top-32 bottom-0 left-0 right-0 -z-10 flex items-center justify-center text-[10rem] opacity-5 sm:text-[20rem] md:text-[27rem]"
        >
          {t('500')}
        </Text>

        <Text containerTag="h2" className="text-4xl font-semibold sm:text-6xl">
          {t('internalServerError')}
        </Text>
        <Text containerTag="p" className="text-base text-default-600 sm:text-xl">
          {t('anErrorOccurredTryAgainLater')}
        </Text>
        <Link
          to={LINKS.DASHBOARD}
          className="mt-6 flex items-center justify-center rounded-[10px] bg-primary px-7 py-3 text-base font-medium text-white"
        >
          {t('goBackHome')}
        </Link>
      </div>
    </div>
  );
};

export default InternalServerError500;
