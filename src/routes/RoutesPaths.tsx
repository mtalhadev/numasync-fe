// React Router Dom
import { Navigate, Outlet } from 'react-router-dom';

// Data
import {
  OTHER_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from 'src/data/routes.tsx';

// Pages
import DeviceAdded from 'pages/DeviceAdded';
import ExpiredLink from 'pages/ExpiredLink';
import Forbidden403 from 'src/pages/403';
import NotFound404 from 'src/pages/404';
import InternalServerError500 from 'src/pages/500';
import TwoFactorAuth from 'src/pages/Auth/Common/TwoFactorAuth';
import Registration from 'src/pages/Auth/Registration';
import WorkspaceCreate from 'src/pages/Auth/Registration/WorkspaceCreate';
import ForgetPassword from 'src/pages/Auth/SignIn/ForgetPassword';
import Login from 'src/pages/Auth/SignIn/Login';
import PasswordReset from 'src/pages/Auth/SignIn/PasswordReset';
import Clients from 'src/pages/Dashboard/Clients';
import Dashboard from 'src/pages/Dashboard/Dashboard';
import Entity from 'src/pages/Dashboard/Entities/Entities';
import EntityGroups from 'src/pages/Dashboard/EntityGroups';
import Staff from 'src/pages/Dashboard/Staff';
import Users from 'src/pages/Dashboard/Users';
import Workspaces from 'src/pages/Dashboard/Workspaces';
import SubscriptionPlan from 'src/pages/Auth/Registration/SubscriptionPlan';
import Billing from 'src/pages/Auth/Registration/Billing';
import InviteTeam from 'src/pages/Auth/Registration/InviteTeam';
import SetupComplete from 'src/pages/Auth/Common/SetupComplete';
import AccountCreated from 'src/pages/Auth/Common/AccountCreated';
import IndividualEntity from 'src/pages/Dashboard/Entities/IndividualEntity';
import Reports from 'src/pages/Dashboard/Entities/IndividualEntity/Reports';
import Overview from 'src/pages/Dashboard/Entities/IndividualEntity/Overview';
import AccessManagement from 'src/pages/Dashboard/Entities/IndividualEntity/AccessManagement';
import ChartOfAccounts from 'src/pages/Dashboard/Entities/IndividualEntity/ChartOfAccounts';
import Journal from 'src/pages/Dashboard/Entities/IndividualEntity/Journal';
import Feeds from 'src/pages/Dashboard/Entities/IndividualEntity/Feeds';
import AccountingFirmDirectory from 'src/pages/Dashboard/Entities/IndividualEntity/AccessManagement/AccountingFirmDirectory';
import ReportType from 'src/pages/Dashboard/Entities/IndividualEntity/Reports/ReportType';
import ChartOfAccountsType from 'src/pages/Dashboard/Entities/IndividualEntity/ChartOfAccounts/ChartOfAccountsType';
import ChartOfAccountsSubType from 'src/pages/Dashboard/Entities/IndividualEntity/ChartOfAccounts/ChartOfAccountsType/ChartOfAccountsSubType';
import Documents from 'src/pages/Dashboard/Documents';
import Settings from 'src/pages/Dashboard/Settings';
import Profile from 'src/pages/Dashboard/Settings/Profile';
import Team from 'src/pages/Dashboard/Settings/Team';
import SettingBilling from 'src/pages/Dashboard/Settings/Billing';
import Api from 'src/pages/Dashboard/Settings/Api';
import Security from 'src/pages/Dashboard/Settings/Security';
import Roles from 'src/pages/Dashboard/Settings/Roles';
import EditRole from 'src/pages/Dashboard/Settings/Roles/Edit-Role';
import AccountSetting from 'src/pages/Dashboard/AccountSetting';
import AccountDetail from 'src/pages/Dashboard/AccountSetting/AccountDetail';
import AccountNotification from 'src/pages/Dashboard/AccountSetting/Notification';
import AccountBilling from 'src/pages/Dashboard/AccountSetting/Billing';
import AccountSession from 'src/pages/Dashboard/AccountSetting/Sessions';
import AccountMfa from 'src/pages/Dashboard/AccountSetting/MAF';
import Report from 'src/pages/Dashboard/Reports';
import Individual from 'src/pages/Dashboard/Individuals';
import Revenue from 'src/pages/Dashboard/Revenue';
import Subscription from 'src/pages/Dashboard/Subscriptions';
import Invoice from 'src/pages/Dashboard/Invoices';
import TeamMember from 'src/pages/Dashboard/TeamMembers';
import Organizations from 'src/pages/Dashboard/Organizations';
import { LINKS } from 'src/data/links';

export const PublicRoutes = [
  {
    path: PUBLIC_ROUTES.LOGIN,
    page: <Login />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.FORGOT_PASSWORD,
    page: <ForgetPassword />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.RESET_PASSWORD,
    page: <PasswordReset />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.AUTHENTICATION_CODE,
    page: <TwoFactorAuth />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.REGISTER,
    page: <Registration />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.WORKSPACE_CREATE,
    page: <WorkspaceCreate />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.WORKSPACE_SUBSCRIPTION,
    page: <SubscriptionPlan />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.WORKSPACE_BILLING,
    page: <Billing />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.WORKSPACE_TEAM_INVITE,
    page: <InviteTeam />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.DEVICE_ADDED,
    page: <DeviceAdded />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.SETUP_COMPLETE,
    page: <SetupComplete />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.AUTHENTICATION_METHOD_ADDED,
    page: <DeviceAdded />,
    role: ['public'],
  },
  {
    path: PUBLIC_ROUTES.ACCOUNT_CREATE,
    page: <AccountCreated />,
    role: ['public'],
  },
];

export const PrivateRoutes = [
  {
    path: PRIVATE_ROUTES.ROOT,
    page: <Navigate to={LINKS.DASHBOARD} />,
    role: ['admin', 'firm', 'client'],
  },
  {
    path: PRIVATE_ROUTES.DASHBOARD,
    page: <Dashboard />,
    role: ['admin', 'firm', 'client'],
  },
  {
    path: PRIVATE_ROUTES.ACCOUNTING_FIRMS,
    page: <Workspaces />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.WORKSPACES,
    page: <Workspaces />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.ACCOUNTINGFIRMDIRECTORY,
    page: <AccountingFirmDirectory />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.DOCUMENTS,
    page: <Documents />,
    role: ['admin', 'firm'],
  },
  {
    path: PRIVATE_ROUTES.ENTITIES,
    page: <Outlet />,
    role: ['firm'],
    children: [
      {
        path: '',
        page: <Entity />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.INDIVIDUALENTITY,
        page: <IndividualEntity />,
        role: ['firm'],
        children: [
          {
            path: PRIVATE_ROUTES.OVERVIEW,
            page: <Overview />,
            role: ['firm'],
          },
          {
            path: PRIVATE_ROUTES.ACCESSMANAGEMENT,
            page: <AccessManagement />,
            role: ['firm'],
          },
          {
            path: PRIVATE_ROUTES.CHARTOFACCOUNTS,
            page: <ChartOfAccounts />,
            role: ['firm'],
          },
          {
            path: PRIVATE_ROUTES.JOURNAL,
            page: <Journal />,
            role: ['firm'],
          },
          {
            path: PRIVATE_ROUTES.FEEDS,
            page: <Feeds />,
            role: ['firm'],
          },
          {
            path: PRIVATE_ROUTES.CHILDREPORTS,
            page: <Reports />,
            role: ['firm'],
          },
        ],
      },
    ],
  },
  // Child of Entity/Reports/ but can't be placed under reports children because of the layout design
  {
    path: `${PRIVATE_ROUTES.ENTITIES}/${PRIVATE_ROUTES.INDIVIDUALENTITY}/${PRIVATE_ROUTES.CHILDREPORTS}/${PRIVATE_ROUTES.REPORTTYPE}`,
    page: <ReportType />,
    role: ['firm'],
  },
  {
    path: `${PRIVATE_ROUTES.ENTITIES}/${PRIVATE_ROUTES.INDIVIDUALENTITY}/${PRIVATE_ROUTES.CHARTOFACCOUNTS}/${PRIVATE_ROUTES.CHARTOFACCOUNTSTYPE}`,
    page: <ChartOfAccountsType />,
    role: ['firm'],
  },
  {
    path: `${PRIVATE_ROUTES.ENTITIES}/${PRIVATE_ROUTES.INDIVIDUALENTITY}/${PRIVATE_ROUTES.CHARTOFACCOUNTS}/${PRIVATE_ROUTES.CHARTOFACCOUNTSTYPE}/${PRIVATE_ROUTES.CHARTOFACCOUNTSTYPE}`,
    page: <ChartOfAccountsSubType />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.ENTITYGROUPS,
    page: <EntityGroups />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.CLIENTS,
    page: <Clients />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.USERS,
    page: <Users />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.STAFF,
    page: <Staff />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.INDIVIDUAlS,
    page: <Individual />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.REPORTS,
    page: <Report />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.REVENUE,
    page: <Revenue />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.SUBSCRIPTIONS,
    page: <Subscription />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.INVOICES,
    page: <Invoice />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.TEAMMEMBERS,
    page: <TeamMember />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.ORGANIZATIONS,
    page: <Organizations />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.SETTINGS,
    page: <Settings />,
    role: ['firm'],
    children: [
      {
        path: PRIVATE_ROUTES.PROFILE,
        page: <Profile />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.TEAM,
        page: <Team />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.BILLING,
        page: <SettingBilling />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.API,
        page: <Api />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.SECURITY,
        page: <Security />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.ROLES,
        page: <Roles />,
        role: ['firm'],
        children: [],
      },
    ],
  },
  {
    path: `${PRIVATE_ROUTES.SETTINGS}/${PRIVATE_ROUTES.ROLES}/${PRIVATE_ROUTES.EDITROLE}`,
    page: <EditRole />,
    role: ['firm'],
  },
  {
    path: PRIVATE_ROUTES.ACCOUNTING_SETTING,
    page: <AccountSetting />,
    role: ['firm'],
    children: [
      {
        path: PRIVATE_ROUTES.ACCOUNTDETAIL,
        page: <AccountDetail />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.MFA,
        page: <AccountMfa />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.NOTIFICATION,
        page: <AccountNotification />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.BILLING,
        page: <AccountBilling />,
        role: ['firm'],
      },
      {
        path: PRIVATE_ROUTES.SESSIONS,
        page: <AccountSession />,
        role: ['firm'],
      },
    ],
  },
];

export const OtherRoutes = [
  {
    path: OTHER_ROUTES.EXPIRED_LINK,
    page: <ExpiredLink />,
  },
  {
    path: OTHER_ROUTES.NOTFOUND,
    page: <NotFound404 />,
    // page: <NotFound />,
  },
  {
    path: OTHER_ROUTES.FORBIDDEN,
    page: <Forbidden403 />,
  },
  {
    path: OTHER_ROUTES.INTERNALSERVERERROR,
    page: <InternalServerError500 />,
  },
];
