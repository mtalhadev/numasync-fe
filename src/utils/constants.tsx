// Icons
import {
  Buildings2,
  LogoutCurve,
  ReceiptItem,
  UserRemove,
} from 'iconsax-react';

// Types
import { ApexOptions } from 'apexcharts';
import { AccountingDataIF } from 'src/types/accountingData';
import { SelectOption } from 'src/types/selectTypes';
import { SidebarSection } from 'src/types/sidebarTypes';
import { BADGE_VARIANTS, STATUS } from './enums';
import { PlanTypes } from 'src/types/commonTypes';

export const userDropdownList: SidebarSection[] = [
  {
    section: 'MENU ITEM',
    links: [
      {
        title: 'Account Settings',
        href: '',
        icon: <UserRemove size="24" />,
      },
      {
        title: 'Billing',
        href: '',
        icon: <ReceiptItem size="24" />,
      },
    ],
    hasDivider: true,
  },
  {
    section: 'SWITCH ENVIRONMENTS',
    links: [
      {
        title: 'Organization Name LLC',
        href: '',
        icon: <Buildings2 size="24" />,
      },
    ],
    hasDivider: true,
  },
  {
    section: '',
    links: [
      {
        title: 'Logout',
        href: '',
        icon: <LogoutCurve size="24" />,
        hasAction: true,
      },
    ],
  },
];

export const dashboardStats = [
  {
    counts: '62',
    title: 'Entities',
  },
  {
    counts: '45',
    title: 'Pending Report Automations',
    description: '3 Require Attention',
  },
  {
    counts: '06',
    title: 'Outstanding Invoice',
  },
];

export type ReportsIF = {
  entityName: string;
  reportStatus: 'Pending' | 'Complete' | 'In Review';
  scheduledReportDate: string;
  dueDate: string;
  action: string;
};

export const ReportsData: ReportsIF[] = [
  {
    entityName: 'Kibriya Zameer',
    reportStatus: 'Pending',
    scheduledReportDate: 'January 16, 2024',
    dueDate: 'January 20, 2024',
    action: 'Action Required',
  },
  {
    entityName: 'Zuraid Zameer',
    reportStatus: 'In Review',
    scheduledReportDate: 'January 16, 2024',
    dueDate: 'January 20, 2024',
    action: 'Pending',
  },
  {
    entityName: 'Kibriya Zameer',
    reportStatus: 'Complete',
    scheduledReportDate: 'January 16, 2024',
    dueDate: 'January 20, 2024',
    action: 'Complete',
  },
  {
    entityName: 'Zuraid Zameer',
    reportStatus: 'Pending',
    scheduledReportDate: 'January 16, 2024',
    dueDate: 'January 20, 2024',
    action: 'Action Required',
  },
  {
    entityName: 'Zuraid Zameer',
    reportStatus: 'In Review',
    scheduledReportDate: 'January 16, 2024',
    dueDate: 'January 20, 2024',
    action: 'Complete',
  },
];

export type orgAccessDataIF = {
  organizationsName: string;
  status: 'Pending Invite' | 'Active' | 'Inactive';
  entitiesManaged: string;
  dateAdded: string;
  action: string;
};

export const orgAccessData: orgAccessDataIF[] = [
  {
    organizationsName: 'Ford Motor Company',
    status: 'Pending Invite',
    entitiesManaged: '4',
    dateAdded: 'January 20, 2024',
    action: '',
  },
  {
    organizationsName: 'Goldman Sachs',
    status: 'Active',
    entitiesManaged: '16',
    dateAdded: 'December 16, 223',
    action: '',
  },
  {
    organizationsName: 'Wikimedia Foundation',
    status: 'Inactive',
    entitiesManaged: '34',
    dateAdded: 'December 13, 223',
    action: '',
  },
];

export type orgTeamMemberDataIF = {
  firstName: string;
  lastName: string;
  email: string;
  status: 'Pending Invite' | 'Active' | 'Inactive';
  role: string;
  action: string;
};

export const orgTeamMembersData: orgTeamMemberDataIF[] = [
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alexjohnson@gmail.com',
    status: 'Active',
    role: 'Community Manager',
    action: '',
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alexjohnson@gmail.com',
    status: 'Pending Invite',
    role: 'Community Manager',
    action: '',
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alexjohnson@gmail.com',
    status: 'Inactive',
    role: 'Community Manager',
    action: '',
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alexjohnson@gmail.com',
    status: 'Pending Invite',
    role: 'Community Manager',
    action: '',
  },
];

export type billingHistoryDataIF = {
  Invoice: string;
  InvoiceDate: string;
  dueDate: string;
  status: 'Paid' | 'UnPaid';
  amount: string;
  action: string;
};

export const billingHistoryData: billingHistoryDataIF[] = [
  {
    Invoice: 'Invoice#006-356',
    InvoiceDate: 'December 16, 223',
    dueDate: 'December 16, 223',
    status: 'Paid',
    amount: 'USD$10:00',
    action: '',
  },
  {
    Invoice: 'Invoice#006-356',
    InvoiceDate: 'December 16, 223',
    dueDate: 'December 16, 223',
    status: 'Paid',
    amount: 'USD$10:00',
    action: '',
  },
  {
    Invoice: 'Invoice#006-356',
    InvoiceDate: 'December 16, 223',
    dueDate: 'December 16, 223',
    status: 'UnPaid',
    amount: 'USD$10:00',
    action: '',
  },
  {
    Invoice: 'Invoice#006-356',
    InvoiceDate: 'December 16, 223',
    dueDate: 'December 16, 223',
    status: 'Paid',
    amount: 'USD$10:00',
    action: '',
  },
];

export type entityDataIF = {
  llcName: string;
  managedBy: string;
  contact: string;
  action: string;
};

export const entityData: entityDataIF[] = [
  {
    llcName: 'Ford Motor Company',
    managedBy: 'Accountant',
    contact: '123456789',
    action: '',
  },
  {
    llcName: 'Ford Motor Company',
    managedBy: 'Accountant',
    contact: '123456789',
    action: '',
  },
  {
    llcName: 'Ford Motor Company',
    managedBy: 'Accountant',
    contact: '123456789',
    action: '',
  },
  {
    llcName: 'Ford Motor Company',
    managedBy: 'Accountant',
    contact: '123456789',
    action: '',
  },
];

export type Security = {
  label: string;
  text: string;
};

export type OptionType = {
  label: string;
  value: string;
};

export type FeedDataIF = {
  name: string;
  mid: string;
  status: 'Active' | 'Pause';
  automationType: 'Active' | 'Partial';
  action: '';
};

export const feedData: FeedDataIF[] = [
  {
    name: 'Ford Motor Company',
    mid: '2132131321651',
    status: 'Active',
    automationType: 'Active',
    action: '',
  },
  {
    name: 'Ford Motor Company',
    mid: '2132131321651',
    status: 'Active',
    automationType: 'Partial',
    action: '',
  },
  {
    name: 'Ford Motor Company',
    mid: '2132131321651',
    status: 'Pause',
    automationType: 'Partial',
    action: '',
  },
  {
    name: 'Ford Motor Company',
    mid: '2132131321651',
    status: 'Pause',
    automationType: 'Active',
    action: '',
  },
];

export type ReportDataIF = {
  reportType: string;
  lastUpdate: string;
  nextUpdate: string;
  action: '';
};

export const reportData: ReportDataIF[] = [
  {
    reportType: 'Checking Account daily Balance',
    lastUpdate: 'January 01,2024',
    nextUpdate: 'January 29,2024',
    action: '',
  },
  {
    reportType: 'Reserves Report',
    lastUpdate: 'January 01,2024',
    nextUpdate: 'January 29,2024',
    action: '',
  },
];

export interface SummaryTotals {
  [key: string]: number;
}

export type summaryDataIF = {
  feed?: string;
  mid?: string;
  bank: string;
  [date: string]: string | undefined;
};

export const SummaryData: summaryDataIF[] = [
  {
    feed: 'Feed 1',
    mid: '758575875875787',
    bank: 'Swift Bank',
    '12/31/23': '52347218',
    '1/1/24': '88423579',
    '1/2/24': '76935817',
    '1/3/24': '94372649',
    '1/4/24': '37621553',
    '1/5/24': '59483274',
    '1/6/24': '48523792',
  },
  {
    feed: 'Feed 2',
    mid: '758575875875666',
    bank: 'Special Bank',
    '12/31/23': '93582467',
    '1/1/24': '104239857',
    '1/2/24': '65748392',
    '1/3/24': '85734512',
    '1/4/24': '97354762',
    '1/5/24': '38452834',
    '1/6/24': '59827146',
  },
  {
    feed: 'Feed 3',
    mid: '875785758757787',
    bank: 'Swift Bank',
    '12/31/23': '21534762',
    '1/1/24': '78241489',
    '1/2/24': '57894312',
    '1/3/24': '82376425',
    '1/4/24': '63487254',
    '1/5/24': '91283657',
    '1/6/24': '75648231',
  },
  {
    feed: 'Feed 4',
    mid: '575678687979797',
    bank: 'Trust Net',
    '12/31/23': '83475213',
    '1/1/24': '69324857',
    '1/2/24': '58376432',
    '1/3/24': '76542897',
    '1/4/24': '92473258',
    '1/5/24': '54826174',
    '1/6/24': '88436529',
  },
];

export type ReserveDataIF = {
  iso: string;
  feed: string;
  mid: string;
  reservesHeld: string;
  reservesReleased: string;
  currentReserves: string;
};

export const reserveData: ReserveDataIF[] = [
  {
    iso: 'ISO 1',
    feed: 'Feed 1',
    mid: '758575875875787',
    reservesHeld: '87654321',
    reservesReleased: '87654321',
    currentReserves: '87654321',
  },
  {
    iso: 'ISO 2',
    feed: 'Feed 2',
    mid: '758575875875787',
    reservesHeld: '123456789',
    reservesReleased: '123456789',
    currentReserves: '123456789',
  },
  {
    iso: 'ISO 3',
    feed: 'Feed 3',
    mid: '758575875875787',
    reservesHeld: '56789012',
    reservesReleased: '56789012',
    currentReserves: '56789012',
  },
  {
    iso: 'ISO 4',
    feed: 'Feed 4',
    mid: '758575875875787',
    reservesHeld: '987654321',
    reservesReleased: '987654321',
    currentReserves: '987654321',
  },
];

export type tabDataIF = {
  title: string;
  key: string;
  Description?: string;
};

export const AccountingData: AccountingDataIF[] = [
  {
    firmName: 'Numasync Accounting Firm',
    owner: 'Andy Chong',
    noTeamMembers: '9',
    action: '',
  },
  {
    firmName: 'RevitPay Accounting Firm',
    owner: 'Peter Kusner',
    noTeamMembers: '16',
    action: '',
  },
  {
    firmName: 'Example CPA Firm',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    firmName: 'Specialist CPAs',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    firmName: 'Numasync Accounting Firm',
    owner: 'Andy Chong',
    noTeamMembers: '9',
    action: '',
  },
  {
    firmName: 'RevitPay Accounting Firm',
    owner: 'Peter Kusner',
    noTeamMembers: '16',
    action: '',
  },
  {
    firmName: 'Example CPA Firm',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    firmName: 'Specialist CPAs',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
];

export const TimezoneSelectOptions: SelectOption[] = [
  {
    value: 'America/New_York',
    label: 'America/New_York',
  },
  {
    value: 'America/Chicago',
    label: 'America/Chicago',
  },
  {
    value: 'America/Denver',
    label: 'America/Denver',
  },
  {
    value: 'America/Los_Angeles',
    label: 'America/Los_Angeles',
  },
  {
    value: 'America/Anchorage',
    label: 'America/Anchorage',
  },
  {
    value: 'Pacific/Honolulu',
    label: 'Pacific/Honolulu',
  },
  {
    value: 'America/Adak',
    label: 'America/Adak',
  },
  {
    value: 'Pacific/Guam',
    label: 'Pacific/Guam',
  },
  {
    value: 'Pacific/Saipan',
    label: 'Pacific/Saipan',
  },
  {
    value: 'Pacific/Pago_Pago',
    label: 'Pacific/Pago_Pago',
  },
  {
    value: 'Pacific/Midway',
    label: 'Pacific/Midway',
  },
  {
    value: 'Pacific/Wake',
    label: 'Pacific/Wake',
  },
  {
    value: 'Pacific/Auckland',
    label: 'Pacific/Auckland',
  },
  {
    value: 'Pacific/Fiji',
    label: 'Pacific/Fiji',
  },
  {
    value: 'Pacific/Tongatapu',
    label: 'Pacific/Tongatapu',
  },
  {
    value: 'Pacific/Apia',
    label: 'Pacific/Apia',
  },
  {
    value: 'Pacific/Kiritimati',
    label: 'Pacific/Kiritimati',
  },
];
export const stateSelectOptions: SelectOption[] = [
  { label: 'Alabama', value: 'AL' },
  { label: 'California', value: 'CA' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Texas', value: 'TX' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
];

export const statusVariant = {
  [STATUS.COMPLETE]: BADGE_VARIANTS.SUCCESS,
  [STATUS.INREVIEW]: BADGE_VARIANTS.NORMAL,
  [STATUS.PENDING]: BADGE_VARIANTS.WARNING,
  [STATUS.PENDINGINVITE]: BADGE_VARIANTS.NORMAL,
  [STATUS.ACTIONREQUIRED]: BADGE_VARIANTS.DANGER,
  [STATUS.PENDINGAPPROVAL]: BADGE_VARIANTS.SECONDARY,
  [STATUS.INACTIVE]: BADGE_VARIANTS.DANGER,
  [STATUS.ACTIVE]: BADGE_VARIANTS.SUCCESS,
  [STATUS.PAUSED]: BADGE_VARIANTS.WARNING,
  [STATUS.DRAFT]: BADGE_VARIANTS.DISABLED,
  [STATUS.ERROR]: BADGE_VARIANTS.DANGER,
  [STATUS.ERRORBANKCONNECTION]: BADGE_VARIANTS.DANGER,
};

export const chartOptions: ApexOptions = {
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [],
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
};

export const Languages = [
  {
    label: 'English',
    value: 'en',
    src: 'https://flagcdn.com/us.svg',
  },
  {
    label: 'Spanish',
    value: 'es',
    src: 'https://flagcdn.com/es.svg',
  },
];

export const UserActions = [
  {
    label: 'export',
    value: 'export',
  },
  {
    label: 'addToGroup',
    value: 'addToGroup',
  },
  {
    label: 'addTag',
    value: 'addTag',
  },
];

export const FeedDropdownOptions = [
  { value: 'bank', label: 'Bank' },
  { value: 'processor', label: 'Processor' },
  { value: 'gateway', label: 'Gateway' },
  { value: 'crm', label: 'CRM' },
];

export const ReportExportDropdownActions = [
  {
    label: 'PDF',
    value: 'pdf',
  },
  {
    label: 'CSV',
    value: 'csv',
  },
];

export const FirmSettingsTabs = [
  { key: 1, title: 'profile' },
  { key: 2, title: 'team' },
  { key: 3, title: 'billingSmall' },
  { key: 4, title: 'api' },
  { key: 5, title: 'security' },
  { key: 6, title: 'roles' },
];

export const AccountSettingsTabs = [
  { key: 1, title: 'Account Details' },
  { key: 2, title: 'MFA' },
  { key: 3, title: 'Notifications' },
  { key: 4, title: 'Billing' },
  { key: 5, title: 'Sessions' },
];

export const IndividualEntityTabs = [
  { key: 1, title: 'overview' },
  { key: 2, title: 'accessManagement' },
  { key: 3, title: 'chartOfAccounts' },
  { key: 4, title: 'journal' },
  { key: 5, title: 'feeds' },
  { key: 6, title: 'reports' },
];

export const SettingsTeamMemberRoles: SelectOption[] = [
  {
    label: 'accountant',
    value: 'accountant',
  },
  {
    label: 'teamLead',
    value: 'teamLead',
  },
];

export const PlanData: PlanTypes[] = [
  {
    id: 'basic',
    title: 'basicPlan',
    amount: '$10',
    description: 'includesUpToUsersAndFeedsAvailableInThisPlanBasic',
  },
  {
    id: 'business',
    title: 'businessPlan',
    amount: '$20',
    description: 'includesUpToUsersAndFeedsAvailableInThisPlanBusiness',
  },
  {
    id: 'enterprise',
    title: 'enterprisePlan',
    amount: '$50',
    description:
      'includesUpToUnlimitedUsersAndUnlimitedFeedsAvailableInThisPlanEnterprise',
  },
];

export const pagesTitleFontClasses =
  'text-lg text-foreground font-semibold leading-8 sm:text-xl';
export const pagesSubTitleFontClasses =
  'text-xs font-normal text-default-500 sm:text-sm';

export const NUMASYNC_USER = 'numassync_user';
export const NUMASYNC_SESSION = 'numassync_session';
