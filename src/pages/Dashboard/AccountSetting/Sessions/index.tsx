import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import Divider from 'src/components/atoms/Divider';
import CustomButton from 'src/components/atoms/Button';

// Icons
import { Mobile, Monitor } from 'iconsax-react';

const AccountSession = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-8">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground"
        >
          {t('whereYoureLoggedin')}
        </Text>

        <Text containerTag="h5" className="text-sm font-light text-default-500">
          {t('wellAlertYouViaEmailThereIsAnyNewLoginActivityOnYourAccount')}
        </Text>
      </div>

      <Divider className="mb-6 mt-5" />

      <div className="flex w-full items-center gap-4">
        <Monitor size={30} />

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-1 text-sm font-medium text-foreground"
          >
            {t('windowsPcFirefox')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('melbourneAustralia')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('endSession')}
        </CustomButton>
      </div>

      <Divider className="my-5" />

      <div className="flex w-full items-center gap-4">
        <Mobile size={30} />

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-1 text-sm font-medium text-foreground"
          >
            {t('iphoneSafari')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('melbourneAustralia')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('endSession')}
        </CustomButton>
      </div>

      <Divider className="my-5" />

      <div className="flex w-full items-center gap-4">
        <Monitor size={30} />

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-1 text-sm font-medium text-foreground"
          >
            {t('macChrome')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('melbourneAustralia')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('endSession')}
        </CustomButton>
      </div>

      <Divider className="my-5" />

      <Text
        containerTag="h4"
        className="cursor-pointer text-sm font-medium text-primary underline"
      >
        {t('logOutOfAllLocations')}
      </Text>
    </>
  );
};

export default AccountSession;
