import { useCallback, useEffect, useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// React Router
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import Tabs from 'src/components/atoms/Tabs';
import Text from 'src/components/atoms/Text';
import { cn } from 'src/utils/cn';

// utils
import {
  AccountSettingsTabs,
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
} from 'src/utils/constants';
import {
  removeHyphensAndMakeCamelCase,
  removeWhiteSpaces,
} from 'src/utils/helper';

const AccountSetting = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const tabs = segments?.[4];
    if (tabs) {
      setSelectedTab(removeHyphensAndMakeCamelCase(tabs));
    } else {
      setSelectedTab('account-details');
      navigate(removeWhiteSpaces('account-details', false, true));
    }
  }, []);

  const onTabSelection = useCallback(
    (key: string) => {
      setSelectedTab(key);
      navigate(removeWhiteSpaces(key.toLowerCase(), false, true));
    },
    [navigate]
  );

  return (
    <div>
      <div className="mb-8">
        <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
          {t('accountSettings')}
        </Text>

        <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
          {t('manageYourAccountSettingsHere')}
        </Text>
      </div>

      <Tabs
        tabs={AccountSettingsTabs}
        selected={selectedTab as string}
        onChange={(key: number | string) => onTabSelection(key as string)}
      />

      <Outlet />
    </div>
  );
};

export default AccountSetting;
