/* eslint-disable no-unused-vars */
export enum CUSTOM_CELL_TYPE {
  TEXT = 'TEXT',
  BADGE = 'BADGE',
  LINK = 'LINK',
  ACTION = 'ACTION',
  DATE = 'DATE',
  EYE = 'EYE',
  DESCRIPTOR = 'DESCRIPTOR',
}

export enum GRAPH_TYPE {
  INCREASING = 'INCREASING',
  DECREASING = 'DECREASING',
}

export enum BADGE_VARIANTS {
  SUCCESS = 'SUCCESS',
  NORMAL = 'NORMAL',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  SECONDARY = 'SECONDARY',
  DISABLED = 'DISABLED',
}

export enum STATUS {
  COMPLETE = 'COMPLETE',
  INREVIEW = 'INREVIEW',
  PENDING = 'PENDING',
  PENDINGAPPROVAL = 'PENDINGAPPROVAL',
  PENDINGINVITE = 'PENDINGINVITE',
  INACTIVE = 'INACTIVE',
  ACTIONREQUIRED = 'ACTIONREQUIRED',
  PAUSED = 'PAUSED',
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  ERROR = 'ERROR',
  ERRORBANKCONNECTION = 'ERRORBANKCONNECTION',
}

export enum SKELETON_VARIANT {
  TEXT = 'TEXT',
  TABLE = 'TABLE',
  CARD = 'CARD',
}

export enum BANKACCOUNTTYPE {
  EXISTING = 'EXISTING',
  NEW = 'NEW',
}

export enum USERROLE {
  ADMIN = 'ADMIN',
  FIRM = 'FIRM',
  CLIENT = 'CLIENT',
}

export enum UPLOADFILETYPES {
  CSV = 'CSV',
  IMAGE = 'IMAGE',
}

export enum USERPERMISSIONS {
  CAN_READ = 'CAN_READ',
  CAN_WRITE = 'CAN_WRITE',
  CAN_UPDATE = 'CAN_UPDATE',
  CAN_DELETE = 'CAN_DELETE',
  CAN_MANAGE = 'CAN_MANAGE',
}
