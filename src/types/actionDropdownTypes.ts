import { dropDownMenus } from './dropDownTypes';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type DropdownItemType = {
  name: string;
  onClick: () => void;
  classes: string;
};

export type ActionDropdownProps = {
  onView?: (_data: any) => void;
  onEdit?: (_data: any) => void;
  onDelete?: (_data: any) => void;
  customActionMenu?: dropDownMenus[];
  TrashIcon?: boolean;
  showActionDropdown?: boolean;
  data: any;
};
