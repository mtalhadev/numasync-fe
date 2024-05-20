import { Avatar } from '@nextui-org/react';
import { Clock, Notification } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import CustomButton from 'src/components/atoms/Button';
import CustomPopover from 'src/components/atoms/Popover';
import Text from 'src/components/atoms/Text';
import { DummyNotifications } from 'src/data/dummyData';

const NotificationPopover = () => {
  const { t } = useTranslation();

  return (
    <CustomPopover
      title={t('notifications')}
      desciption={t('youHaveNewNotifications')}
      triggerButon={
        <Avatar
          icon={<Notification size="20" />}
          classNames={{
            base: 'bg-defaulr-50 !size-10 border-default-100 cursor-pointer hidden sm:flex',
            icon: 'text-default-500',
          }}
        />
      }
      content={
        <>
          {DummyNotifications.map((notification, idx) => (
            <div key={notification.date}>
              <div className="flex items-center justify-between bg-default-50 px-5 py-4">
                <Text
                  containerTag="p"
                  className="text-xs font-bold text-default-600"
                >
                  {notification.date}
                </Text>
                {idx === 0 && (
                  <CustomButton variant="light">
                    {t('markAllAsRead')}
                  </CustomButton>
                )}
              </div>
              {notification.notifications.map(notificationData => (
                <div
                  key={notificationData.title}
                  className="flex items-start justify-center gap-4 border-b border-b-default-100 px-4 py-3"
                >
                  <img
                    src={notificationData.image}
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <Text containerTag="p" className="text-xs text-default-500">
                      <Text
                        containerTag="span"
                        className="font-semibold text-foreground"
                      >
                        {notificationData.title}
                      </Text>{' '}
                      {notificationData.description}
                    </Text>
                    <div className="mt-1 flex items-center justify-start gap-1">
                      <Clock size="12" />
                      <Text
                        containerTag="p"
                        className="text-[10px] text-default-500"
                      >
                        {notificationData.time}
                      </Text>
                    </div>
                    <div className="mt-2 flex gap-[6px]">
                      <CustomButton>{t('accept')}</CustomButton>
                      <CustomButton className="bg-default text-default-foreground">
                        {t('reject')}
                      </CustomButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      }
    />
  );
};

export default NotificationPopover;
