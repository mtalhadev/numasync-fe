import { LINKS } from './links';

export const PUBLIC_ROUTES = {
  LOGIN: LINKS.LOGIN,
  FORGOT_PASSWORD: LINKS.FORGOT_PASSWORD,
  RESET_PASSWORD: LINKS.RESET_PASSWORD,

  // Authentication
  AUTHENTICATION_CODE: LINKS.AUTHENTICATION_CODE,

  // Registration
  REGISTER: LINKS.REGISTER,
  WORKSPACE_CREATE: LINKS.WORKSPACE_CREATE,
  WORKSPACE_SUBSCRIPTION: LINKS.WORKSPACE_SUBSCRIPTION,
  WORKSPACE_BILLING: LINKS.WORKSPACE_BILLING,
  WORKSPACE_TEAM_INVITE: LINKS.WORKSPACE_TEAM_INVITE,

  DEVICE_ADDED: LINKS.DEVICE_ADDED,
  SETUP_COMPLETE: LINKS.SETUP_COMPLETE,
  ACCOUNT_CREATE: LINKS.ACCOUNT_CREATE,
  AUTHENTICATION_METHOD_ADDED: LINKS.AUTHENTICATION_METHOD_ADDED,
};

export const PRIVATE_ROUTES = {
  ROOT: LINKS.ROOT,
  DASHBOARD: LINKS.DASHBOARD,
  ACCOUNTING_FIRMS: LINKS.ACCOUNTING_FIRMS,
  WORKSPACES: LINKS.WORKSPACES,
  ACCOUNTINGFIRMDIRECTORY: LINKS.ACCOUNTINGFIRMDIRECTORY,
  DOCUMENTS: LINKS.DOCUMENTS,
  ENTITIES: LINKS.ENTITIES,
  INDIVIDUAlS: LINKS.INDIVIDUAlS,
  REVENUE: LINKS.REVENUE,
  SUBSCRIPTIONS: LINKS.SUBSCRIPTIONS,
  INVOICES: LINKS.INVOICES,
  TEAMMEMBERS: LINKS.TEAMMEMBERS,
  ORGANIZATIONS: LINKS.ORGANIZATIONS,
  REPORTS: LINKS.REPORTS,

  // Child Entity
  INDIVIDUALENTITY: LINKS.INDIVIDUALENTITY,

  // Child Individual Entity
  OVERVIEW: LINKS.OVERVIEW,
  ACCESSMANAGEMENT: LINKS.ACCESSMANAGEMENT,
  CHARTOFACCOUNTS: LINKS.CHARTOFACCOUNTS,

  // Child Chart of Accounts
  CHARTOFACCOUNTSTYPE: LINKS.CHARTOFACCOUNTSTYPE,
  JOURNAL: LINKS.JOURNAL,
  FEEDS: LINKS.FEEDS,
  CHILDREPORTS: LINKS.CHILDREPORTS,

  // Child Reports
  REPORTTYPE: LINKS.REPORTTYPE,

  ENTITYGROUPS: LINKS.ENTITYGROUPS,
  CLIENTS: LINKS.CLIENTS,
  USERS: LINKS.USERS,
  STAFF: LINKS.STAFF,
  SETTINGS: LINKS.SETTINGS,
  // Child Settings
  PROFILE: LINKS.PROFILE,
  TEAM: LINKS.TEAM,
  BILLING: LINKS.BILLING,
  API: LINKS.API,
  SECURITY: LINKS.SECURITY,
  ROLES: LINKS.ROLES,
  EDITROLE: LINKS.EDITROLE,

  // Accounting Settings
  ACCOUNTING_SETTING: LINKS.ACCOUNTING_SETTING,

  // Accounting Settings Child Routes
  ACCOUNTDETAIL: LINKS.ACCOUNTDETAIL,
  MFA: LINKS.MFA,
  NOTIFICATION: LINKS.NOTIFICATION,
  SESSIONS: LINKS.SESSIONS,
};

export const OTHER_ROUTES = {
  EXPIRED_LINK: LINKS.EXPIRED_LINK,
  NOTFOUND: LINKS.NOTFOUND,
  FORBIDDEN: LINKS.FORBIDDEN,
  INTERNALSERVERERROR: LINKS.INTERNALSERVERERROR,
};
