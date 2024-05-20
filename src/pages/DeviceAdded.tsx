// Icons
import { TickCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';

const DeviceAdded = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-[440px] flex-col items-center justify-center gap-8">
        <TickCircle size="80" className="text-success-500" />
        <div className="text-center">
          <Text
            containerTag="h5"
            className="text-xl font-semibold text-foreground md:text-4xl"
          >
            {t('deviceAdded')}
          </Text>
          <Text containerTag="p" className="mt-3 text-base text-default-500">
            {t('googleAuthenticatorHasBeenAddedFor2FA')}
          </Text>
        </div>

        <CustomButton size="lg" variant="solid" fullWidth type="submit">
          {t('done')}
        </CustomButton>
      </div>
    </div>
  );
};

export default DeviceAdded;
