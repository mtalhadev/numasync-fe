export const LINKS = {
  ROOT: '/',

  // Public Routes
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  AUTHENTICATION_CODE: '/authentication-code',

  // Registration
  REGISTER: '/register',
  WORKSPACE_CREATE: '/workspace/create',
  WORKSPACE_SUBSCRIPTION: '/workspace/subscription',
  WORKSPACE_BILLING: '/workspace/billing',
  WORKSPACE_TEAM_INVITE: '/workspace/invite',

  // Other Public Routes
  DEVICE_ADDED: '/device-added',
  SETUP_COMPLETE: '/setup-complete',
  ACCOUNT_CREATE: '/account-create',
  AUTHENTICATION_METHOD_ADDED: '/authentication-method-added',

  // Private Routes
  DASHBOARD: '/dashboard',
  ACCOUNTING_FIRMS: '/accounting-firms',
  WORKSPACES: '/workspaces',
  DOCUMENTS: '/documents',
  INDIVIDUAlS: '/individuals',
  REVENUE: '/revenue',
  SUBSCRIPTIONS: '/subscriptions',
  INVOICES: '/invoices',
  TEAMMEMBERS: '/team-members',
  ORGANIZATIONS: '/organizations',
  REPORTS: '/reports',

  ACCOUNTINGFIRMDIRECTORY: '/accounting-firm-directory',
  ENTITIES: '/entities',
  // Child Entity Routes
  INDIVIDUALENTITY: ':entityName',
  // Child Individual Entity Routes
  OVERVIEW: 'overview',
  ACCESSMANAGEMENT: 'access-management',
  CHARTOFACCOUNTS: 'chart-of-accounts',
  // Child Chart of Accounts
  CHARTOFACCOUNTSTYPE: ':chartOfAccount',
  JOURNAL: 'journal',
  FEEDS: 'feeds',
  CHILDREPORTS: 'reports',
  // Child Reports
  REPORTTYPE: ':reportType',

  ENTITYGROUPS: '/entity-groups',
  CLIENTS: '/clients',
  USERS: '/users',
  STAFF: '/staff',
  SETTINGS: '/settings',

  // Child Settings routes
  PROFILE: 'profile',
  TEAM: 'team',
  BILLING: 'billing',
  API: 'api',
  SECURITY: 'security',
  ROLES: 'roles',
  EDITROLE: 'edit-role',

  // Accounting Settings
  ACCOUNTING_SETTING: '/account-setting',

  // Accounting Settings Child Routes
  ACCOUNTDETAIL: 'account-details',
  MFA: 'mfa',
  NOTIFICATION: 'notifications',
  SESSIONS: 'sessions',

  // Other Routes
  EXPIRED_LINK: '/expired-link',
  NOTFOUND: '*',
  FORBIDDEN: '/forbidden',
  INTERNALSERVERERROR: '/internal-server-error',
};
