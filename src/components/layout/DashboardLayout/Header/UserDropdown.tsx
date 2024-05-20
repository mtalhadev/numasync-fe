import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'src/redux/slice/reducers/global.reducer';

// Utils
import { removeCookie } from 'src/utils/cookie';

// Data
import { LINKS } from 'src/data/links';
import { showToast } from 'src/utils/toast';
import { Add, ArrowRight2, Bill, Buildings2, LogoutCurve } from 'iconsax-react';
import { UserSettings } from 'src/assets/svg';
import Text from 'src/components/atoms/Text';
import { ProfileImage } from 'src/assets/images';
import CustomPopover from 'src/components/atoms/Popover';
import { useCallback, useMemo, useState } from 'react';
import { cn } from 'src/utils/cn';
import { useTranslation } from 'react-i18next';
import { DummyWorkspaces } from 'src/data/dummyData';
import { setSelectedWorkspace } from 'src/redux/slice/reducers/user.reducer';
import { GlobalTypes } from 'src/types/globalTypes';
import { UserDropdownFieldTypes } from 'src/types/commonTypes';

const UserDropdown = () => {
  const [isWorkspacesOpen, setIsWorkspacesOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userReducer = useSelector((state: GlobalTypes) => state.userReducer);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = useCallback(async () => {
    try {
      dispatch(setUser(null));
      removeCookie('numassync_token');
      removeCookie('numassync_user');
      showToast({ message: t('logoutSuccessful'), type: 'success' });
      setTimeout(() => {
        navigate(LINKS.LOGIN);
      }, 300);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, navigate]);

  const UserDropdownFields: UserDropdownFieldTypes[] = useMemo(
    () => [
      {
        title: t('accountSettings'),
        icon: (
          <img src={UserSettings} alt="User settings" className="h-4 w-4" />
        ),
        href: LINKS.ACCOUNTING_SETTING,
      },
      {
        title: t('billing'),
        icon: <Bill size="16" />,
        showDivider: true,
        href: `${LINKS.ACCOUNTING_SETTING}/${LINKS.BILLING}`,
      },
      {
        title: t('workspace'),
        icon: <Buildings2 size="16" />,
        showDivider: true,
        childrenPopoverItems: [
          ...DummyWorkspaces.map((workspace, ind) => ({
            id: workspace.id,
            title: workspace.name,
            onClick: () => {
              dispatch(setSelectedWorkspace(workspace));
              setIsWorkspacesOpen(false);
              showToast({
                message: t('workspaceChangeSuccessful'),
                type: 'success',
              });
              setIsDropdownOpen(false);
              navigate(LINKS.DASHBOARD);
            },
            showDivider: ind === DummyWorkspaces.length - 1 ? true : false,
          })),
          {
            title: t('createNewWorkspace'),
            className: 'text-primary',
            icon: <Add size={16} className="text-primary" />,
            id: 'create',
          },
        ],
      },
      {
        title: 'logout',
        icon: <LogoutCurve size="16" />,
        onClick: handleSignOut,
      },
    ],
    [t, handleSignOut, dispatch]
  );

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: 'before:bg-default-200', // change arrow background
        content: 'p-0 border-small border-divider bg-background',
      }}
      isOpen={isDropdownOpen}
      onOpenChange={isOpen => {
        setIsDropdownOpen(isOpen);
        if (isOpen) {
          setIsWorkspacesOpen(false);
        }
      }}
    >
      <DropdownTrigger>
        <User
          classNames={{
            base: ['gap-2', 'cursor-pointer'],
            name: ['text-sm', 'font-medium'],
            description: [
              'text-xs',
              'font-medium',
              'text-default-500',
              'flex',
              'items-center',
              'gap-[5px]',
            ],
          }}
          name=""
          avatarProps={{
            src: '',
            classNames: {
              base: '!size-10',
            },
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={['profile']}
        className="p-0"
        itemClasses={{
          base: [
            'rounded-md',
            'text-default-500',
            'transition-opacity',
            'data-[hover=true]:text-foreground',
            'data-[hover=true]:bg-default-100',
            'dark:data-[hover=true]:bg-default-50',
            'data-[selectable=true]:focus:bg-default-50',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions">
          <DropdownItem
            isReadOnly
            key="profile"
            className="gap-2 px-4 py-3 opacity-100"
            showDivider
            textValue="profile"
          >
            <User
              name={
                userReducer.user?.firstName
                  ? `${userReducer.user?.firstName} + ${userReducer.user?.lastName}`
                  : 'Jessy Jason'
              }
              description={userReducer.user?.email ?? 'jessy.j@example.com'}
              classNames={{
                name: 'text-foreground font-medium text-sm',
                description: 'text-default-500 text-xs',
              }}
              avatarProps={{
                size: 'sm',
                src: userReducer.user?.avatarUrl ?? ProfileImage,
              }}
            />
          </DropdownItem>
          {UserDropdownFields.map(item => (
            <DropdownItem
              key={item.title}
              startContent={!item.childrenPopoverItems && item.icon}
              showDivider={item?.showDivider}
              onClick={item.onClick}
              textValue={item.title}
            >
              {!item.childrenPopoverItems ? (
                <Link
                  to={item.href}
                  containerTag="p"
                  className="text-sm text-foreground"
                >
                  {item.title}
                </Link>
              ) : (
                <CustomPopover
                  isOpen={isWorkspacesOpen}
                  showArrow={false}
                  placement="left-start"
                  triggerButon={
                    <div
                      className="flex items-center justify-between"
                      onMouseEnter={() => setIsWorkspacesOpen(true)}
                      onMouseLeave={() => setIsWorkspacesOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        {item?.icon}
                        <Text
                          containerTag="p"
                          className="text-sm text-foreground"
                        >
                          {item.title}
                        </Text>
                      </div>
                      <ArrowRight2 size={16} />
                    </div>
                  }
                  content={
                    <div className="py-2">
                      {item.childrenPopoverItems.map(
                        (popover: UserDropdownFieldTypes) => (
                          <div
                            key={popover.title}
                            className={cn(
                              'flex cursor-pointer items-center px-4 py-2 hover:bg-default-100',
                              popover?.showDivider &&
                                'border-b border-b-default-100',
                              userReducer.selectedWorkspace?.id ===
                                popover?.id && 'bg-default-300'
                            )}
                            onMouseEnter={() => setIsWorkspacesOpen(true)}
                            onMouseLeave={() => setIsWorkspacesOpen(false)}
                            onClick={popover?.onClick}
                          >
                            {popover?.icon}
                            <Text
                              containerTag="p"
                              className={cn(popover.className ?? '')}
                            >
                              {popover.title}
                            </Text>
                          </div>
                        )
                      )}
                    </div>
                  }
                />
              )}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
