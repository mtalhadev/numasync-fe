import { useState } from 'react';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import PopUpModal from 'src/components/atoms/PopUpModal';

// i18n
import { useTranslation } from 'react-i18next';

// Icons
import { Add, KeySquare, Messages3, Sms } from 'iconsax-react';

// Images
import { Google } from 'src/assets/images';

const AccountMfa = () => {
  const { t } = useTranslation();
  const [authenticationModel, setAuthenticationModel] = useState(false);

  return (
    <>
      <PopUpModal
        isOpen={authenticationModel}
        onClose={() => setAuthenticationModel(false)}
        onSubmit={() => setAuthenticationModel(false)}
        title={t('requiredAuthenticationSetup')}
        submitButtonColor="danger"
        buttonLabel={t('dismiss')}
      >
        <Text containerTag="p" className="text-base text-default-500">
          {t('atLeastOneMultiFactorAuthenticationMethodIsNeededPerAccount')}
        </Text>
      </PopUpModal>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <Text
            containerTag="h1"
            className="mb-1 text-lg font-semibold leading-8 text-foreground"
          >
            {t('multifactorauthentication')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-normal text-default-500"
          >
            {t(
              'multifactorAuthenticationAddsAnAdditionalFactorToTheLogInTransactionInorderToPreventUnauthorizedAccess'
            )}
          </Text>
        </div>

        <CustomButton
          className="text-sm"
          leadingIcon={<Add />}
          onClick={() => setAuthenticationModel(true)}
        >
          {t('add2FAAuthentication')}
        </CustomButton>
      </div>

      <Divider className="mb-6 mt-5" />

      <div className="flex w-full items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-default-200 p-2">
          <Sms size={36} />
        </div>

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-[2px] text-base font-semibold text-foreground"
          >
            {t('email')}
          </Text>

          <Text containerTag="h1" className="text-sm text-default-500">
            {t('youCanUseYouEmailFor2FA')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('delete')}
        </CustomButton>
      </div>

      <Divider className="mb-5 mt-4" />

      <div className="flex w-full items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-default-200 p-2">
          <img src={Google} alt="" width={36} height={36} />
        </div>

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-[2px] text-base font-semibold text-foreground"
          >
            {t('googleAuthenticator')}
          </Text>

          <Text containerTag="h1" className="text-sm text-default-500">
            {t('googleAuthenticatorForMultifactorAuthentication')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('delete')}
        </CustomButton>
      </div>

      <Divider className="mb-5 mt-4" />

      <div className="flex w-full items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-default-200 p-2">
          <Messages3 size={36} />
        </div>

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-[2px] text-base font-semibold text-foreground"
          >
            {t('textMessage')}
          </Text>

          <Text containerTag="h1" className="text-sm text-default-500">
            {t('onetimePasswordUsingTextMessage')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('delete')}
        </CustomButton>
      </div>

      <Divider className="mb-5 mt-4" />

      <div className="flex w-full items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-default-200 p-2">
          <KeySquare size={36} />
        </div>

        <div className="w-full">
          <Text
            containerTag="h1"
            className="mb-[2px] text-base font-semibold text-foreground"
          >
            {t('yubiKey')}
          </Text>

          <Text containerTag="h1" className="text-sm text-default-500">
            {t('oneTimePasswordUsingYubiKey')}
          </Text>
        </div>

        <CustomButton className="text-sm" color="danger">
          {t('delete')}
        </CustomButton>
      </div>

      <Divider className="mb-5 mt-4" />
    </>
  );
};

export default AccountMfa;
