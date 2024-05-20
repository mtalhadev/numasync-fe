import React from 'react';

// NextUI
import { Avatar } from '@nextui-org/react';

// Icons
import { HambergerMenu, Setting2 } from 'iconsax-react';

// Components
import SearchBar from 'src/components/atoms/SearchBar';
import SelectInput from 'src/components/atoms/Select';
import { ThemeSwitcher } from 'src/components/common/ThemeSwitcher';
import UserDropdown from './UserDropdown';

// Data
import { Languages } from 'src/utils/constants';

// Next i18n
import { useTranslation } from 'react-i18next';
import NotificationPopover from 'src/components/molecules/NotificationPopover';

interface HeaderIF {
  setIsOpen: (_isOpen: boolean) => void;
}

const Header: React.FC<HeaderIF> = ({ setIsOpen }) => {
  const { i18n } = useTranslation();

  return (
    <header className="sticky top-0 z-[19] flex h-[70px] flex-grow-0 items-center border-b border-content2 bg-default-50 px-4 xl:px-6">
      <div className="flex w-full items-center justify-between">
        <HambergerMenu
          size="24"
          className="mr-4 text-default-500 lg:hidden"
          onClick={() => {
            setIsOpen(true);
          }}
        />

        <SearchBar />
        <div className="ml-auto flex items-center gap-3 p-2.5">
          <ThemeSwitcher />
          <Avatar
            icon={<Setting2 size="20" />}
            classNames={{
              base: 'bg-defaulr-50 !size-10 border-default-100 cursor-pointer hidden sm:flex',
              icon: 'text-default-500',
            }}
          />

          <NotificationPopover />

          <div className="w-36">
            <SelectInput
              label="Language"
              options={Languages}
              variant="bordered"
              value={i18n.language}
              onChange={e => {
                i18n.changeLanguage(e.target.value);
              }}
            />
          </div>

          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
