import { SidebarSection, SidebarTypes } from 'src/types/sidebarTypes';

// Icons
import {
  Buildings2,
  Category,
  ClipboardText,
  Crown1,
  Note,
  Notepad2,
  PenTool,
  People,
  Profile2User,
  Setting2,
  Share,
  StatusUp,
  UserOctagon,
} from 'iconsax-react';
import { USERROLE } from 'src/utils/enums';

const AdminSidebarLinks: SidebarSection[] = [
  {
    section: '',
    links: [
      {
        title: 'dashboard',
        href: '/dashboard',
        icon: <Category size="24" />,
      },
      {
        title: 'workspaces',
        href: '/workspaces',
        icon: <Buildings2 size="24" />,
      },
      {
        title: 'entities',
        href: '/entities',
        icon: <Share size="24" />,
      },
      {
        title: 'documents',
        href: '/documents',
        icon: <Note size="24" />,
      },
    ],
  },
  {
    section: 'analytics',
    links: [
      {
        title: 'reports',
        href: '/reports',
        icon: <Notepad2 size="24" />,
      },
      {
        title: 'revenue',
        href: '/revenue',
        icon: <StatusUp size="24" />,
      },
    ],
  },
  {
    section: 'billing',
    links: [
      {
        title: 'subscriptions',
        href: '/subscriptions',
        icon: <Crown1 size="24" />,
      },
      {
        title: 'invoices',
        href: '/invoices',
        icon: <ClipboardText size="24" />,
      },
    ],
  },
  {
    section: 'userManagement',
    links: [
      {
        title: 'users',
        href: '/users',
        icon: <Profile2User size="24" />,
      },
      {
        title: 'staff',
        href: '/staff',
        icon: <People size="24" />,
      },
    ],
  },
  {
    section: 'organization',
    links: [
      {
        title: 'settings',
        href: '/settings',
        icon: <Setting2 size="24" />,
      },
    ],
  },
];

const FirmSidebarLinks: SidebarSection[] = [
  {
    section: '',
    links: [
      {
        title: 'dashboard',
        href: '/dashboard',
        icon: <Category size="24" />,
      },
      {
        title: 'entities',
        href: '/entities',
        icon: <Share size="24" />,
      },
      {
        title: 'entityGroups',
        href: '/entity-groups',
        icon: <PenTool size="24" />,
      },
      {
        title: 'individuals',
        href: '/individuals',
        icon: <UserOctagon size="24" />,
      },
      {
        title: 'documents',
        href: '/documents',
        icon: <Note size="24" />,
      },
    ],
  },
  {
    section: 'analytics',
    links: [
      {
        title: 'reports',
        href: '/reports',
        icon: <Notepad2 size="24" />,
      },
      {
        title: 'revenue',
        href: '/revenue',
        icon: <StatusUp size="24" />,
      },
    ],
  },
  {
    section: 'billing',
    links: [
      {
        title: 'subscriptions',
        href: '/subscriptions',
        icon: <Crown1 size="24" />,
      },
      {
        title: 'invoices',
        href: '/invoices',
        icon: <ClipboardText size="24" />,
      },
    ],
  },
  {
    section: 'organization',
    links: [
      {
        title: 'settings',
        href: '/account-setting',
        icon: <Setting2 size="24" />,
      },
      {
        title: 'teamMembers',
        href: '/team-members',
        icon: <Profile2User size="24" />,
      },
    ],
  },
];

const ClientSidebarLinks: SidebarSection[] = [
  {
    section: '',
    links: [
      {
        title: 'dashboard',
        href: '/dashboard',
        icon: <Category size="24" />,
      },
      {
        title: 'entities',
        href: '/entities',
        icon: <Share size="24" />,
      },
      {
        title: 'entityGroups',
        href: '/entity-groups',
        icon: <PenTool size="24" />,
      },
      {
        title: 'documents',
        href: '/documents',
        icon: <Note size="24" />,
      },
    ],
  },
  {
    section: 'analytics',
    links: [
      {
        title: 'reports',
        href: '/reports',
        icon: <Notepad2 size="24" />,
      },
    ],
  },
  {
    section: 'accessManagement',
    links: [
      {
        title: 'users',
        href: '/users',
        icon: <Profile2User size="24" />,
      },
      {
        title: 'organizations',
        href: '/organizations',
        icon: <Buildings2 size="24" />,
      },
    ],
  },
];

export const SidebarLinks: SidebarTypes = {
  [USERROLE.ADMIN]: AdminSidebarLinks,
  [USERROLE.FIRM]: FirmSidebarLinks,
  [USERROLE.CLIENT]: ClientSidebarLinks,
};
