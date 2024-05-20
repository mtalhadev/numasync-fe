// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import Switch from 'src/components/atoms/ Switch';
import Divider from 'src/components/atoms/Divider';

const Security = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-5 mt-8">
        <Text containerTag="h2" className="mb-1 text-lg font-semibold text-foreground">
          {t('security')}
        </Text>

        <Text containerTag="h5" className="text-sm text-default-500">
          {t('updateYourSecuritySettingsHereTheseSettingsWillAppliedToAllUsers')}
        </Text>
      </div>

      <Divider className="mb-6 mt-5" />

      <div className="mb-5 flex items-center justify-between gap-8">
        <div>
          <Text containerTag="h2" className="mb-[2px] text-sm font-semibold text-foreground">
            {t('clientEntityPrivacy')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('onlyAllowTeamMembersToseeToIfThisDisabledTeamMembersEntitiesClient')}
          </Text>
        </div>

        <Switch />
      </div>

      <div className="mb-5 flex items-center justify-between gap-8">
        <div>
          <Text containerTag="h2" className="mb-[2px] text-sm font-semibold text-foreground">
            {t('publicListings')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('listYourWorkspacOurDirectorySoPeopleCouldFindYourBusinessAndHireYouForWork')}
          </Text>
        </div>

        <Switch />
      </div>

      <Divider className="my5" />
    </>
  );
};

export default Security;
