import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { ArrowSquareLeft, CloseCircle } from 'iconsax-react';

// Components
import Text from 'src/components/atoms/Text';

// Data
import { LABELS } from 'src/data/labels';
import { SidebarLinks } from 'src/data/sidebarData';

// Next i18n
import { useTranslation } from 'react-i18next';

// Assets
import {
  DarkLogoWithoutText,
  LeadingDarkLogo,
  LeadingLightLogo,
  LightLogoWithoutText,
} from 'src/assets/svg';

// Next Theme
import { useTheme } from 'next-themes';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarCollapsed } from 'src/redux/slice/reducers/global.reducer';

// Types
import { GlobalTypes } from 'src/types/globalTypes';
import { USERROLE } from 'src/utils/enums';

type SidebarIF = {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
};

const Sidebar: React.FC<SidebarIF> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: GlobalTypes) => state.global.sidebarCollapsed
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-30 h-screen bg-container transition-width-transform ${collapsed ? 'w-[80px]' : 'w-[240px]'} ${isOpen ? 'translate-x-0' : '-translate-x-[240px] lg:translate-x-0'}`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-center border-r border-content2 py-2">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            {collapsed ? (
              <img
                src={
                  theme === 'numa-light'
                    ? DarkLogoWithoutText
                    : LightLogoWithoutText
                }
                alt="Logo"
                className="h-18 w-44"
              />
            ) : (
              <img
                src={
                  theme === 'numa-light' ? LeadingDarkLogo : LeadingLightLogo
                }
                alt="Logo"
                className="h-24 w-48"
              />
            )}

            {isOpen && (
              <div
                className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-1 shadow"
                onClick={handleClose}
              >
                <CloseCircle
                  size="24"
                  color="#006FEE"
                  className="duration-200 group-hover:rotate-180"
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={`scrollbar h-[calc(100vh_-_80px)] overflow-auto border-r border-content2 pb-8 lg:pb-20 ${collapsed ? 'px-3' : 'px-4'}`}
        >
          {/* TODO: Change the type of user based on the loggedin user role */}
          {SidebarLinks[USERROLE.ADMIN].map((section, index) => (
            <div key={index}>
              {section.section !== '' && (
                <Text
                  containerTag="h6"
                  className="my-5 truncate text-ellipsis pl-3 text-left text-sm font-medium text-default-500"
                >
                  {t(section.section)}
                </Text>
              )}
              <ul className="space-y-1">
                {section.links.map(link => (
                  <li key={link.title}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `${isActive && 'bg-primary/5 text-primary'} rounded-xs group relative z-10 flex items-center gap-2 rounded-lg p-3 font-medium hover:bg-primary/5 hover:text-primary`
                      }
                    >
                      <Text
                        containerTag="span"
                        className="shrink-0 text-inherit"
                      >
                        {link.icon}
                      </Text>

                      <Text
                        containerTag="span"
                        className={`z-0 flex items-center justify-center whitespace-nowrap text-sm leading-none duration-300 ${collapsed && 'invisible absolute left-8 hidden rounded-lg bg-background px-3 py-2 text-sm text-foreground opacity-0 shadow-right-top-bottom hover:text-foreground group-hover:visible group-hover:left-16 group-hover:opacity-100'}`}
                      >
                        {collapsed && (
                          <span className="absolute left-[-6px] z-[-1] h-[10px] w-[10px] rotate-45 border border-content2 bg-background shadow-lg" />
                        )}
                        {t(link.title)}
                      </Text>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`sticky bottom-0 z-20 hidden w-full items-center whitespace-nowrap border-t border-default-200 bg-background py-2 lg:flex ${collapsed ? 'justify-center px-4' : 'justify-between pl-4 pr-8'}`}
        >
          {!collapsed && (
            <Text
              containerTag="h4"
              className="select-none text-sm text-default-400"
            >
              {LABELS.versionBeta}
            </Text>
          )}
          {!isOpen && (
            <ArrowSquareLeft
              color="#006FEE"
              className={`cursor-pointer ${collapsed ? 'rotate-180' : 'rotate-0'} duration-300`}
              size={24}
              onClick={() => {
                dispatch(setSidebarCollapsed(!collapsed));
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
