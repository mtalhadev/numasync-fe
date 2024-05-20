// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import Divider from 'src/components/atoms/Divider';
import Switch from 'src/components/atoms/ Switch';

const AccountNotification = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-8">
        <Text
          containerTag="h2"
          className="mb-1 text-lg font-semibold text-foreground"
        >
          {t('notificationSettings')}
        </Text>

        <Text containerTag="h5" className="text-sm text-default-500">
          {t('updateYourNotificationsSettingsHere')}
        </Text>
      </div>

      <Divider className="mb-6 mt-5" />

      <Text
        containerTag="h3"
        className="mb-5 text-lg font-semibold text-foreground"
      >
        {t('marketingEmailNotifications')}
      </Text>

      <div className="flex w-full items-center justify-between gap-8">
        <div>
          <Text
            containerTag="h2"
            className="text-sm font-semibold text-foreground"
          >
            {t('latestUpdates')}
          </Text>
          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t(
              'receiveNotificationsAboutlatestUpdatesChangesToNumasyncNewProductOfferingsAndMore'
            )}
          </Text>
        </div>

        <Switch size="sm" showText />
      </div>

      <Divider className="my-5" />

      <Text
        containerTag="h3"
        className="mb-5 text-lg font-semibold text-foreground"
      >
        {t('reportNotifications')}
      </Text>

      <div className="mb-5 flex w-full items-center justify-between gap-8">
        <div>
          <Text
            containerTag="h2"
            className="text-sm font-semibold text-foreground"
          >
            {t('reportingErrors')}
          </Text>
          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t(
              'receiveAnemailWhenThereIsAnErrorRunningReportAndActionMayBeRequiredToCorrectTheIssue'
            )}
          </Text>
        </div>

        <Switch size="sm" showText />
      </div>

      <div className="flex w-full items-center justify-between gap-8">
        <div>
          <Text
            containerTag="h2"
            className="text-sm font-semibold text-foreground"
          >
            {t('monthlyReport')}
          </Text>
          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('receiveAnEmailNotificationForWhenAMonthEndReportIsReady')}
          </Text>
        </div>

        <Switch size="sm" showText />
      </div>

      <Divider className="my-5" />

      <Text
        containerTag="h3"
        className="mb-5 text-lg font-semibold text-foreground"
      >
        {t('securityNotifications')}
      </Text>

      <div className="mb-5 flex w-full items-center justify-between gap-8">
        <div>
          <Text
            containerTag="h2"
            className="text-sm font-semibold text-foreground"
          >
            {t('loginNotifications')}
          </Text>
          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('receiveAnEmailWhenYouLoginFromANewLocationForTheFirstTime')}
          </Text>
        </div>

        <Switch size="sm" showText />
      </div>

      <div className="flex w-full items-center justify-between gap-8">
        <div>
          <Text
            containerTag="h2"
            className="text-sm font-semibold text-foreground"
          >
            {t('userInvites')}
          </Text>
          <Text
            containerTag="h4"
            className="text-sm font-light text-default-500"
          >
            {t('receiveANotificationWhenAnInviteToShareResourcesIsSentOutFromYourAccount')}
          </Text>
        </div>

        <Switch size="sm" showText />
      </div>
    </>
  );
};

export default AccountNotification;
