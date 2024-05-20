import React from 'react';
import { CUSTOM_CELL_TYPE, USERROLE } from 'src/utils/enums';

export type TableSortTypes = {
  field: string | '';
  type: CUSTOM_CELL_TYPE.TEXT | CUSTOM_CELL_TYPE.DATE | '';
  count: number;
};

type Route = {
  path: string;
  page: React.ReactNode;
  role: string[];
};

export type RouteTypes = Route & {
  children?: Route[];
};

export type ErrorType = {
  data: {
    message: string;
  };
};

export type UserRoleTypes = USERROLE;

export type PlanTypes = {
  id: string;
  title: string;
  amount: string;
  description: string;
};

export type PaymentMethodsTypes = {
  id: string;
  title: string;
  expiryDate: string;
  image: string;
};

export type GetAllQueryParams = {
  page: number;
  limit: number;
  orderDirection?: string;
  range?: number;
  prev_days_start_date?: string;
};

export type BankAccountTypes = {
  bankName: string;
  accountNumber: string;
  routingNumber: string;
};

export type RefreshTokenType = {
  refreshToken: string;
};

export type WorkspaceType = {
  id: string;
  name: string;
  phone: string;
  email: string;
  logoUrl: string | null;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  url: string;
  customRoleId: string;
  createdBy: string;
  description: string | null;
  ownerFullname: string;
  memberCount: number;
};

export type UserDropdownFieldTypes = {
  title: string;
  icon?: React.ReactNode;
  showDivider?: boolean;
  childrenPopoverItems?: UserDropdownFieldTypes[];
  onClick?: () => void;
  id?: string;
  className?: string;
  href?: string;
};
