import { LinkCircle } from 'iconsax-react';

// i18next
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';

const ExpiredLink = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[440px] w-full flex flex-col items-center justify-center gap-8">
        <LinkCircle size="80" className="text-danger-500" />
        <div className="text-center">
          <h5 className="text-xl font-semibold text-foreground md:text-4xl">{t('linkExpired')}</h5>
          <p className="text-base text-default-500 mt-3">{t('yourInvitationLinkHasExpired')}</p>
          <p className="text-base text-default-500 mt-1">{t('pleaseContactYourSystemAdministratorSupport')}</p>
        </div>
        <CustomButton size="lg" fullWidth type="submit">
          {t('contactSupport')}
        </CustomButton>
      </div>
    </div>
  );
};

export default ExpiredLink;
