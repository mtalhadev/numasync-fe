import { useCallback, useEffect, useMemo, useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// React Router
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// Components
import PagesTrack from 'src/components/atoms/PagesTrack';
import Tabs from 'src/components/atoms/Tabs';
import Text from 'src/components/atoms/Text';
import { LINKS } from 'src/data/links';
import { IndividualEntityTabs } from 'src/utils/constants';

// Helpers
import { removeHyphensAndMakeCamelCase, removeWhiteSpaces } from 'src/utils/helper';

const IndividualEntity = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState<string>();

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const tabs = segments?.[5];

    if (tabs) {
      setSelectedTab(removeHyphensAndMakeCamelCase(tabs));
    } else {
      setSelectedTab('overview');
      navigate(removeWhiteSpaces('overview', false, true));
    }
  }, []);

  const pagesTrackList = useMemo(
    () => [
      {
        index: 1,
        name: t('entities'),
        onClick: () => navigate(LINKS.ENTITIES),
      },
      {
        index: 2,
        name: removeHyphensAndMakeCamelCase(params.entityName ?? ''),
        onClick: () => navigate(`${LINKS.ENTITIES}/${params.entityName}`),
      },
      {
        index: 3,
        name: selectedTab as string,
      },
    ],
    [params.entityName, selectedTab, navigate, t],
  );

  const onTabSelection = useCallback(
    (key: string) => {
      setSelectedTab(key);
      navigate(removeWhiteSpaces(key.toLowerCase(), false, true));
    },
    [navigate],
  );

  return (
    <div>
      <PagesTrack pagesTrackList={pagesTrackList} />

      <div className="my-6 mb-8">
        <Text containerTag="h1" className="text-lg font-semibold leading-8 text-foreground sm:text-xl md:text-2xl">
          {removeHyphensAndMakeCamelCase(params.entityName ?? '')}
        </Text>

        <Text containerTag="h4" className="text-xs font-normal text-default-500 sm:text-sm md:text-base">
          {t('manageYourEntitySettingsHere')}
        </Text>
      </div>

      <Tabs
        tabs={IndividualEntityTabs}
        selected={selectedTab as string}
        onChange={(key: number | string) => onTabSelection(key as string)}
      />

      <Outlet />
    </div>
  );
};

export default IndividualEntity;
