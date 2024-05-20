import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Forbidden } from 'src/assets/svg';
import Text from 'src/components/atoms/Text';
import { LINKS } from 'src/data/links';

const Forbidden403 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="relative flex h-1/2 w-4/5 flex-col items-center justify-center gap-6">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 flex items-center justify-center">
          <img src={Forbidden} alt="Forbidden" />
        </div>

        <Text containerTag="h2" className="text-4xl font-semibold sm:text-6xl">
          {t('accessForbidden')}
        </Text>
        <div className="flex flex-col items-center justify-center gap-4 text-default-600">
          <Text containerTag="p" className="text-base sm:text-xl">
            {t('donotHaveAccess')}
          </Text>
          <Text containerTag="p" className="text-base sm:text-xl">
            {t('reachOutToSystemAdministrator')}
          </Text>
        </div>
        <Link
          to={LINKS.DASHBOARD}
          className="mt-8 flex max-w-[570px] items-center justify-center rounded-[10px] bg-primary px-7 py-3 text-base font-medium text-white"
        >
          {t('goBackHome')}
        </Link>
      </div>
    </div>
  );
};

export default Forbidden403;
