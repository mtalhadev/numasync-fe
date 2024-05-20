/* eslint-disable @typescript-eslint/no-explicit-any */
import { BADGE_VARIANTS, CUSTOM_CELL_TYPE } from 'src/utils/enums';
import { ActionDropdownProps } from './actionDropdownTypes';
import { dropDownMenus } from './dropDownTypes';

export interface CustomTableProps {
  selectionMode?: 'none' | 'multiple';
  columns: TableColumnTypes[];
  rows: TableRowTypes[];
  showPagination?: boolean;
  isLoading?: boolean;
  onRowClick?: (_row: { [key: string]: string }) => void;
  customActionMenu?: dropDownMenus[];
  onDelete?: (_data: any) => void;
  onView?: (_data: any) => void;
  onEdit?: (_data: any) => void;
  TrashIcon?: boolean;
  showActionDropdown?: boolean;
  isEmpty?: boolean;
}

export type TableColumnTypes = {
  key: string;
  label: string;
  type: CUSTOM_CELL_TYPE;
};

// TODO: Implement something for the descriptor in Journal table
// interface IDescriptor {
//   descriptor?: { title: string; description: { leading: string; trailing: string } };
// }

export type TableRowTypes = {
  key: string;
  [key: string]: string;
};

export interface TableCellProps {
  type: CUSTOM_CELL_TYPE;
  variant?: BADGE_VARIANTS;
}

export interface CustomTableCellProps
  extends TableCellProps,
    ActionDropdownProps {}
