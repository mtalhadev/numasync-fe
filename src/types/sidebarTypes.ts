import { USERROLE } from 'src/utils/enums';

export interface SidebarLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  hasAction?: boolean;
}

export interface SidebarSection {
  section: string;
  links: SidebarLink[];
  hasDivider?: boolean;
}

export interface SidebarTypes {
  [USERROLE.ADMIN]: SidebarSection[];
  [USERROLE.FIRM]: SidebarSection[];
  [USERROLE.CLIENT]: SidebarSection[];
}
