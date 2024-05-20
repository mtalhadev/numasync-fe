import {
  Abstergo,
  Acme,
  ApplePay,
  AustraliaFlag,
  BigKahunaBurger,
  CanadaFlag,
  IndiaFlag,
  MasterCardIcon,
  PolyMath,
  ProfileImage,
  UKFlag,
  USFlag,
  Visa,
} from 'src/assets/images';
import { GraphCardProps } from 'src/components/molecules/GraphCard';
import {
  BankAccountTypes,
  PaymentMethodsTypes,
  WorkspaceType,
} from 'src/types/commonTypes';
import {
  AccountingFirmDirectoryDataType,
  RevenueCardDataType,
} from 'src/types/dummyDataTypes';
import { SelectOption } from 'src/types/selectTypes';
import { TableColumnTypes, TableRowTypes } from 'src/types/tableTypes';
import { CUSTOM_CELL_TYPE, GRAPH_TYPE, USERPERMISSIONS } from 'src/utils/enums';

export const GRAPHS: GraphCardProps[] = [
  {
    type: GRAPH_TYPE.INCREASING,
    title: 'totalEntities',
    value: 62,
    increasePercent: 42,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'pendingReportAutomations',
    value: 45,
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'outstandingInvoices',
    value: 6,
    increasePercent: 21,
  },
];

/*
*
Tables Dummy Data
*
*/

export const rows: TableRowTypes[] = [
  {
    key: '1',
    name: 'Tony Reichert',
    status: 'Complete',
    scheduledReport: '22 Jan, 2024',
    dueDate: '23 Jan, 2024',
    automationStatus: 'Action Required',
  },
  {
    key: '2',
    name: 'Zoey Lang',
    status: 'In Review',
    scheduledReport: '22 Jan, 2024',
    dueDate: '24 Jan, 2024',
    automationStatus: 'Pending',
  },
  {
    key: '3',
    name: 'Jane Fisher',
    status: 'Pending',
    scheduledReport: '22 Jan, 2024',
    dueDate: '15 Jan, 2024',
    automationStatus: 'Complete',
  },
  {
    key: '4',
    name: 'William Howard',
    status: 'Pending Approval',
    scheduledReport: '22 Jan, 2024',
    dueDate: '22 Jan, 2024',
    automationStatus: 'Complete',
  },
];

export const columns: TableColumnTypes[] = [
  {
    key: 'name',
    label: 'Entity Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'status',
    label: 'STATUS',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'scheduledReport',
    label: 'Scheduled Report',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'dueDate',
    label: 'Due Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'automationStatus',
    label: 'Automation Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
];

export const AccountingTableColumns: TableColumnTypes[] = [
  {
    key: 'name',
    label: 'Accounting Firm Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'ownerFullname',
    label: 'Owner',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'memberCount',
    label: '# of Team Members',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const AccountingTableRows: TableRowTypes[] = [
  {
    key: '1',
    firmName: 'Numasync Accounting Firm',
    owner: 'Andy Chong',
    noTeamMembers: '9',
    action: '',
  },
  {
    key: '2',
    firmName: 'RevitPay Accounting Firm',
    owner: 'Peter Kusner',
    noTeamMembers: '16',
    action: '',
  },
  {
    key: '3',
    firmName: 'Example CPA Firm',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    key: '4',
    firmName: 'Specialist CPAs',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    key: '5',
    firmName: 'Numasync Accounting Firm',
    owner: 'Andy Chong',
    noTeamMembers: '9',
    action: '',
  },
  {
    key: '6',
    firmName: 'RevitPay Accounting Firm',
    owner: 'Peter Kusner',
    noTeamMembers: '16',
    action: '',
  },
  {
    key: '7',
    firmName: 'Example CPA Firm',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
  {
    key: '8',
    firmName: 'Specialist CPAs',
    owner: 'User Full Name',
    noTeamMembers: '09',
    action: '',
  },
];

export const EntitiesTableColumns: TableColumnTypes[] = [
  {
    key: 'entityName',
    label: 'Entity Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'managedBy',
    label: 'Managed By',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'noFeeds',
    label: '# of Feeds',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const EntitiesTableRows: TableRowTypes[] = [
  {
    key: '1',
    entityName: 'Numasync Accounting Firm',
    managedBy: 'Andy Chong',
    noFeeds: '9',
    action: '',
  },
  {
    key: '2',
    entityName: 'RevitPay',
    managedBy: 'Andy Chong CPA',
    noFeeds: '16',
    action: '',
  },
  {
    key: '3',
    entityName: 'Rolex Inc.',
    managedBy: 'Numasync CPAs',
    noFeeds: '09',
    action: '',
  },
  {
    key: '4',
    entityName: 'Specialists LLC',
    managedBy: 'Numasync CPAs',
    noFeeds: '09',
    action: '',
  },
  {
    key: '5',
    entityName: 'Ford Motors Inc.',
    managedBy: 'Andy Chong CPA',
    noFeeds: '9',
    action: '',
  },
  {
    key: '6',
    entityName: 'Coca Cola Inc.',
    managedBy: 'Intuit Inc.',
    noFeeds: '16',
    action: '',
  },
  {
    key: '7',
    entityName: 'Lorex Cameras Inc.',
    managedBy: 'Overseas LLP',
    noFeeds: '09',
    action: '',
  },
  {
    key: '8',
    entityName: 'Smoragasburg LLC',
    managedBy: 'Numasync CPAs',
    noFeeds: '09',
    action: '',
  },
];

export const UsersTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'Entity Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Managed By',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'email',
    label: '# of Feeds',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'noEntitiesAccess',
    label: '# of Entities Accessible',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'dateAdded',
    label: 'Date Added',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const UsersTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Andy',
    lastName: 'Chong',
    email: 'andy@revitpay.com',
    noEntitiesAccess: '9',
    dateAdded: 'Jan 22, 2024',
    action: '',
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    noEntitiesAccess: '5',
    dateAdded: 'Jan 23, 2024',
    action: '',
  },
  {
    key: '3',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    noEntitiesAccess: '3',
    dateAdded: 'Jan 24, 2024',
    action: '',
  },
  {
    key: '4',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    noEntitiesAccess: '7',
    dateAdded: 'Jan 25, 2024',
    action: '',
  },
  {
    key: '5',
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@example.com',
    noEntitiesAccess: '2',
    dateAdded: 'Jan 26, 2024',
    action: '',
  },
  {
    key: '6',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@example.com',
    noEntitiesAccess: '4',
    dateAdded: 'Jan 27, 2024',
    action: '',
  },
  {
    key: '7',
    firstName: 'Olivia',
    lastName: 'Taylor',
    email: 'olivia.taylor@example.com',
    noEntitiesAccess: '6',
    dateAdded: 'Jan 28, 2024',
    action: '',
  },
  {
    key: '8',
    firstName: 'Daniel',
    lastName: 'Anderson',
    email: 'daniel.anderson@example.com',
    noEntitiesAccess: '1',
    dateAdded: 'Jan 29, 2024',
    action: '',
  },
  {
    key: '9',
    firstName: 'Sophia',
    lastName: 'Thomas',
    email: 'sophia.thomas@example.com',
    noEntitiesAccess: '8',
    dateAdded: 'Jan 30, 2024',
    action: '',
  },
];

export const EntityGroupsTableColumns: TableColumnTypes[] = [
  {
    key: 'llcName',
    label: 'LLC Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'managedBy',
    label: 'Managed By',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'noOfMids',
    label: '# of MIDS',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'tag',
    label: 'Tags',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const EntityGroupsTableRows: TableRowTypes[] = [
  {
    key: '1',
    llcName: 'Numasync Accounting Firm',
    managedBy: 'Andy Chong',
    noOfMids: '9',
    tag: 'VIP',
    action: '',
  },
  {
    key: '2',
    llcName: 'RevitPay',
    managedBy: 'Andy Chong CPA',
    noOfMids: '16',
    tag: 'VIP',
    action: '',
  },
  {
    key: '3',
    llcName: 'Rolex Inc.',
    managedBy: 'Numasync CPAs',
    noOfMids: '09',
    tag: 'VIP',
    action: '',
  },
  {
    key: '4',
    llcName: 'Specialists LLC',
    managedBy: 'Numasync CPAs',
    noOfMids: '09',
    tag: 'VIP',
    action: '',
  },
  {
    key: '5',
    llcName: 'Ford Motors Inc.',
    managedBy: 'Andy Chong CPA',
    noOfMids: '9',
    tag: 'VIP',
    action: '',
  },
  {
    key: '6',
    llcName: 'Coca Cola Inc.',
    managedBy: 'Intuit Inc.',
    noOfMids: '16',
    tag: 'VIP',
    action: '',
  },
  {
    key: '7',
    llcName: 'Lorex Cameras Inc.',
    managedBy: 'Overseas LLP',
    noOfMids: '09',
    tag: 'VIP',
    action: '',
  },
  {
    key: '8',
    llcName: 'Smoragasburg LLC',
    managedBy: 'Numasync CPAs',
    noOfMids: '09',
    tag: 'VIP',
    action: '',
  },
];

export const DocumentsTableColumns: TableColumnTypes[] = [
  {
    key: 'documentId',
    label: 'Document ID',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'documentName',
    label: 'Document Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'account',
    label: 'Account',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const DocumentsTableRows: TableRowTypes[] = [
  {
    key: '1',
    documentId: '2798',
    documentName: 'File 1.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '2',
    documentId: '2798',
    documentName: 'File 2.csv',
    account: 'Chart of Accounts',
    status: 'Processing',
    action: '',
  },
  {
    key: '3',
    documentId: '2798',
    documentName: 'File 3.csv',
    account: 'Chart of Accounts',
    status: 'Pending',
    action: '',
  },
  {
    key: '4',
    documentId: '2798',
    documentName: 'File 4.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '5',
    documentId: '2798',
    documentName: 'File 5.csv',
    account: 'Chart of Accounts',
    status: 'Error',
    action: '',
  },
  {
    key: '6',
    documentId: '2798',
    documentName: 'File 6.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '7',
    documentId: '2798',
    documentName: 'File 7.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '8',
    documentId: '2798',
    documentName: 'File 8.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '9',
    documentId: '2798',
    documentName: 'File 9.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
  {
    key: '10',
    documentId: '2798',
    documentName: 'File 10.csv',
    account: 'Chart of Accounts',
    status: 'Complete',
    action: '',
  },
];

/*
*
Platform Admin Dummy Data
*
*/

export const PlatformAllUsersTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'Entity Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Managed By',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'email',
    label: '# of Feeds',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'phone',
    label: 'Phone Number',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'dateJoined',
    label: 'Date Joined',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const PlatformAllUsersTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Andy',
    lastName: 'Chong',
    email: 'andy@revitpay.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 22, 2024',
    action: '',
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 23, 2024',
    action: '',
  },
  {
    key: '3',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 24, 2024',
    action: '',
  },
  {
    key: '4',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 25, 2024',
    action: '',
  },
  {
    key: '5',
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 26, 2024',
    action: '',
  },
  {
    key: '6',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 27, 2024',
    action: '',
  },
  {
    key: '7',
    firstName: 'Olivia',
    lastName: 'Taylor',
    email: 'olivia.taylor@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 28, 2024',
    action: '',
  },
  {
    key: '8',
    firstName: 'Daniel',
    lastName: 'Anderson',
    email: 'daniel.anderson@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 29, 2024',
    action: '',
  },
  {
    key: '9',
    firstName: 'Sophia',
    lastName: 'Thomas',
    email: 'sophia.thomas@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 30, 2024',
    action: '',
  },
  {
    key: '10',
    firstName: 'Emma',
    lastName: 'Martinez',
    email: 'emma.martinez@example.com',
    phone: '555-555-5555',
    dateJoined: 'Jan 31, 2024',
    action: '',
  },
  {
    key: '11',
    firstName: 'Liam',
    lastName: 'Garcia',
    email: 'liam.garcia@example.com',
    phone: '555-555-5555',
    dateJoined: 'Feb 1, 2024',
    action: '',
  },
  {
    key: '12',
    firstName: 'Ava',
    lastName: 'Lopez',
    email: 'ava.lopez@example.com',
    phone: '555-555-5555',
    dateJoined: 'Feb 2, 2024',
    action: '',
  },
  {
    key: '13',
    firstName: 'Noah',
    lastName: 'Hernandez',
    email: 'noah.hernandez@example.com',
    phone: '555-555-5555',
    dateJoined: 'Feb 3, 2024',
    action: '',
  },
  {
    key: '14',
    firstName: 'Isabella',
    lastName: 'Gonzalez',
    email: 'isabella.gonzalez@example.com',
    phone: '555-555-5555',
    dateJoined: 'Feb 4, 2024',
    action: '',
  },
];

export const PlatformStaffTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'First Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'email',
    label: 'Email',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'role',
    label: 'Role',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const PlatformStaffTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Andy',
    lastName: 'Chong',
    email: 'andy@numasync.com',
    role: 'Administrator',
    action: '',
  },
  {
    key: '2',
    firstName: 'Darius',
    lastName: 'Bucinskas',
    email: 'darius@numasync.com',
    role: 'Administrator',
    action: '',
  },
  {
    key: '3',
    firstName: 'Peter',
    lastName: 'Kusner',
    email: 'peter@numasync.com',
    role: 'Administrator',
    action: '',
  },
  {
    key: '4',
    firstName: 'Martin',
    lastName: 'Guido',
    email: 'martin@numasync.com',
    role: 'Manager',
    action: '',
  },
  {
    key: '5',
    firstName: 'Kim',
    lastName: 'Batacan',
    email: 'kim@numasync.com',
    role: 'Onboarding Specialist',
    action: '',
  },
  {
    key: '6',
    firstName: 'Muhammad',
    lastName: 'Talha',
    email: 'muhammad@numasync.com',
    role: 'Support',
    action: '',
  },
];

export const PlatformRolesTableColumns: TableColumnTypes[] = [
  {
    key: 'roleName',
    label: 'Role Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'noUsers',
    label: 'Number of Users',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const PlatformRolesTableRows: TableRowTypes[] = [
  {
    key: '1',
    roleName: 'Administrator',
    // In real data, we need editable = false for administrator.
    // editable: false,
    noUsers: '5',
    action: '',
  },
  {
    key: '2',
    roleName: 'Manager',
    noUsers: '2',
    action: '',
  },
  {
    key: '3',
    // In real data, owner = owner of the workspace
    roleName: 'Accountant',
    noUsers: '6',
    action: '',
  },
  {
    key: '4',
    roleName: 'Onboarding Specialist',
    noUsers: '2',
    action: '',
  },
  {
    key: '5',
    roleName: 'Support',
    noUsers: '1',
    action: '',
  },
];

/*
*
Client Tables Dummy Data
*
*/

export const OrganizationTableColumns: TableColumnTypes[] = [
  {
    key: 'organizationName',
    label: 'Organization Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'noOfEntitiesManaged',
    label: '# of Entities Managed',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'dateAdded',
    label: 'Date Added',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const OrganizationTableRows: TableRowTypes[] = [
  {
    key: '1',
    organizationName: 'Ford Motor Company',
    status: 'Pending Invite',
    noOfEntitiesManaged: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    organizationName: 'Ford Motor Company',
    status: 'Active',
    noOfEntitiesManaged: '16',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '3',
    organizationName: 'Ford Motor Company',
    status: 'Inactive',
    noOfEntitiesManaged: '34',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '4',
    organizationName: 'Ford Motor Company',
    status: 'Pending Invite',
    noOfEntitiesManaged: '12',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '5',
    organizationName: 'Ford Motor Company',
    status: 'Pending Invite',
    noOfEntitiesManaged: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '6',
    organizationName: 'Ford Motor Company',
    status: 'Pending Invite',
    noOfEntitiesManaged: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '7',
    organizationName: 'Ford Motor Company',
    status: 'Pending Approval',
    noOfEntitiesManaged: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
];

export const ClientUserTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'First Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'email',
    label: 'Email',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'noOfEntitiesAccessible',
    label: '# of Entities Accessible',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'dateAdded',
    label: 'Date Added',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const ClientUserTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '3',
    firstName: 'Jane',
    lastName: 'McKinney',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '4',
    firstName: 'Marvin',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '5',
    firstName: 'Darrell',
    lastName: 'Fisher',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '6',
    firstName: 'Cody',
    lastName: 'Black',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '7',
    firstName: 'Guy',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '8',
    firstName: 'Darrell',
    lastName: 'Warren',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '9',
    firstName: 'Annette',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '10',
    firstName: 'Wade',
    lastName: 'Howard',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    noOfEntitiesAccessible: '4',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
];

export const ClientEntityReportTableColumns: TableColumnTypes[] = [
  {
    key: 'reportType',
    label: 'Report Type',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastUpdated',
    label: 'Last Updated',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'nextUpdated',
    label: 'Next Updated',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.EYE,
  },
];

export const ClientEntityReportTableRows: TableRowTypes[] = [
  {
    key: '1',
    reportType: 'Checking Account Daily Balance',
    lastUpdated: '22 Jan, 2024',
    nextUpdated: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    reportType: 'Reserves Report',
    lastUpdated: '22 Jan, 2024',
    nextUpdated: '22 Jan, 2024',
    action: '',
  },
  {
    key: '3',
    reportType: 'Merchant Account Summary Report',
    lastUpdated: '22 Jan, 2024',
    nextUpdated: '22 Jan, 2024',
    action: '',
  },
  {
    key: '4',
    reportType: 'Profit Loss',
    lastUpdated: '22 Jan, 2024',
    nextUpdated: '22 Jan, 2024',
    action: '',
  },
  {
    key: '5',
    reportType: 'Balance Sheets',
    lastUpdated: '22 Jan, 2024',
    nextUpdated: '22 Jan, 2024',
    action: '',
  },
];

export const ClientBankFeedTableColumns: TableColumnTypes[] = [
  {
    key: 'bankName',
    label: 'Bank Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastImport',
    label: 'Last Import',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'linkedTo',
    label: 'Linked To',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const ClientBankFeedTableRows: TableRowTypes[] = [
  {
    key: '1',
    bankName: 'Bank of America',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '2',
    bankName: 'Bank of America',
    lastImport: 'February 25, 2024',
    status: 'Paused',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '3',
    bankName: 'Bank of America',
    lastImport: 'February 25, 2024',
    status: 'Draft',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '4',
    bankName: 'Bank of America',
    lastImport: 'February 25, 2024',
    status: 'Error - Bank Connection',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '5',
    bankName: 'Bank of America',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
];

export const ClientProcessorFeedTableColumns: TableColumnTypes[] = [
  {
    key: 'procesorName',
    label: 'Processor Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastImport',
    label: 'Last Import',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'linkedTo',
    label: 'Linked To',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const ClientProcessorFeedTableRows: TableRowTypes[] = [
  {
    key: '1',
    procesorName: 'Netevia',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '2',
    procesorName: 'Humboldt',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '3',
    procesorName: 'Esquire',
    lastImport: 'February 25, 2024',
    status: 'Paused',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '4',
    procesorName: 'Bank of AMaverickmerica',
    lastImport: 'February 25, 2024',
    status: 'Error',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '5',
    procesorName: 'Maverick',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
];

export const ClientGatewayFeedTableColumns: TableColumnTypes[] = [
  {
    key: 'gatewayName',
    label: 'Gateway Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastImport',
    label: 'Last Import',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'linkedTo',
    label: 'Linked To',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const ClientGatewayFeedTableRows: TableRowTypes[] = [
  {
    key: '1',
    gatewayName: 'Authorize.net',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '2',
    gatewayName: 'NMI',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '3',
    gatewayName: 'Straipe',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '4',
    gatewayName: 'RevitGate',
    lastImport: 'February 25, 2024',
    status: 'Paused',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '5',
    gatewayName: 'RevitGate',
    lastImport: 'February 25, 2024',
    status: 'Error',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
];

export const ClientCRMFeedTableColumns: TableColumnTypes[] = [
  {
    key: 'CRMName',
    label: 'CRM Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastImport',
    label: 'Last Import',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'linkedTo',
    label: 'Linked To',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const ClientCRMFeedTableRows: TableRowTypes[] = [
  {
    key: '1',
    CRMName: 'Authorize.net',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '2',
    CRMName: 'NMI',
    lastImport: 'February 25, 2024',
    status: 'Paused',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '3',
    CRMName: 'Straipe',
    lastImport: 'February 25, 2024',
    status: 'Draft',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '4',
    CRMName: 'RevitGate',
    lastImport: 'February 25, 2024',
    status: 'Error - Bank Connection',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
  {
    key: '5',
    CRMName: 'RevitGate',
    lastImport: 'February 25, 2024',
    status: 'Active',
    linkedTo: '410 (code) - Bank Of America 4252',
    action: '',
  },
];

export const ClientJournalTableColumns: TableColumnTypes[] = [
  {
    key: 'transactionDate',
    label: 'Transaction Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'descriptor',
    label: 'Descriptor',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'memo',
    label: 'Memo',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'debit',
    label: 'Debit',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'credit',
    label: 'Credit',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
];

export const ClientJournalTableRows: TableRowTypes[] = [
  {
    key: '1',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '$420.00',
    credit: '',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '2',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '',
    credit: '$420.00',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '3',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '$420.00',
    credit: '',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '4',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '',
    credit: '$420.00',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '5',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '',
    credit: '$420.00',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '6',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '',
    credit: '$420.00',
    descriptor: 'Restaurant XYZ Charge',
  },
  {
    key: '7',
    transactionDate: '01/02/2024',
    memo: 'Dinner with charity organizers',
    debit: '',
    credit: '$420.00',
    descriptor: 'Restaurant XYZ Charge',
  },
];

export const EntityAccessManagmentTableColumns: TableColumnTypes[] = [
  {
    key: 'organizationName',
    label: 'Organization Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'access',
    label: 'Access',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'dateAdded',
    label: 'Date Added',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const EntityAccessManagmentTableRows: TableRowTypes[] = [
  {
    key: '1',
    organizationName: 'Accounting Company LLC',
    status: 'Pending Invite',
    access: 'Management',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    organizationName: 'Accounting Company LLC',
    status: 'Pending Invite',
    access: 'Read Only',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
];

export const EntityAccessManagmentUserTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'First Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'email',
    label: 'Email',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'dateAdded',
    label: 'Date Added',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const EntityAccessManagmentuserTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'darrel.s@example.com',
    status: 'Active',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '3',
    firstName: 'Jane',
    lastName: 'McKinney',
    email: 'darrel.s@example.com',
    status: 'Inactive',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '4',
    firstName: 'Marvin',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
  {
    key: '5',
    firstName: 'Darrell',
    lastName: 'Fisher',
    email: 'darrel.s@example.com',
    status: 'Pending Invite',
    dateAdded: '22 Jan, 2024',
    action: '',
  },
];

export const EntityChartOfAccountTableColumns: TableColumnTypes[] = [
  {
    key: 'code',
    label: 'Code',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'name',
    label: 'Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'type',
    label: 'Type',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'balance',
    label: 'Balance',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.LINK,
  },
];

export const EntityChartOfAccountTableRows: TableRowTypes[] = [
  {
    key: '1',
    code: '1245',
    name: 'Bank of America',
    type: 'Assets',
    balance: '$10,000.00',
    action: 'Reconcile',
  },

  {
    key: '2',
    code: '1245',
    name: 'BankofAmerica',
    type: 'Accounts Receivable',
    balance: '333',
    action: 'Reconcile',
  },

  {
    key: '3',
    code: '1245',
    name: 'Liabilities',
    type: 'Assets',
    balance: '333',
    action: 'Reconcile',
  },

  {
    key: '4',
    code: '1245',
    name: 'Liabilities',
    type: 'Assets',
    balance: '333',
    action: 'Reconcile',
  },

  {
    key: '5',
    code: '1245',
    name: 'Bank (Checkings or  Savings)',
    type: 'Assets',
    balance: '333',
    action: 'Reconcile',
  },

  {
    key: '6',
    code: '1245',
    name: 'Cost of Goods Sold',
    type: 'Assets',
    balance: '333',
    action: 'Reconcile',
  },
];

export const EntityReportAccountDailyBalanceTableColumns: TableColumnTypes[] = [
  {
    key: 'date',
    label: 'Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: '410',
    label: '410',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: '420',
    label: '420',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: '430',
    label: '430',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'total',
    label: 'Total',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
];

export const EntityReportAccountDailyBalanceTableRows: TableRowTypes[] = [
  {
    key: '1',
    date: 'Dec 31, 2024',
    '410': '$87,654,321',
    '420': '$77,654,321',
    '430': '$67,654,32',
    total: '$77,654,321',
  },
  {
    key: '2',
    date: 'Jan 01, 2024',
    '410': '$87,654,321',
    '420': '$77,654,321',
    '430': '$67,654,32',
    total: '$77,654,321',
  },
  {
    key: '3',
    date: 'Jan 02, 2024',
    '410': '$87,654,321',
    '420': '$77,654,321',
    '430': '$67,654,32',
    total: '$77,654,321',
  },
  {
    key: '4',
    date: 'Jan 03, 2024',
    '410': '$87,654,321',
    '420': '$77,654,321',
    '430': '$67,654,32',
    total: '$77,654,321',
  },
  {
    key: '5',
    date: 'Jan 05, 2024',
    '410': '$87,654,321',
    '420': '$77,654,321',
    '430': '$67,654,32',
    total: '$77,654,321',
  },
];

/*
*
Firm Tables Dummy Data
*
*/

export const FirmSettingsTeamTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'First Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'email',
    label: 'Email',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'role',
    label: 'Role',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const FirmSettingsTeamTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'In Review',
    role: 'Community Manager',
    action: '',
  },
  {
    key: '2',
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'd.s@example.com',
    status: 'Active',
    role: 'Sales Manager',
    action: '',
  },
  {
    key: '3',
    firstName: 'Jane',
    lastName: 'Steward',
    email: 'j.s@example.com',
    status: 'Paused',
    role: 'Senior Developer',
    action: '',
  },
  {
    key: '4',
    firstName: 'Marvin',
    lastName: 'Cooper',
    email: 'd.s@example.com',
    status: 'In Review',
    role: 'Technical Lead',
    action: '',
  },
  {
    key: '5',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'In Review',
    role: 'Community Manager',
    action: '',
  },
  {
    key: '6',
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'd.s@example.com',
    status: 'Active',
    role: 'Sales Manager',
    action: '',
  },
  {
    key: '7',
    firstName: 'Jane',
    lastName: 'Steward',
    email: 'j.s@example.com',
    status: 'Paused',
    role: 'Senior Developer',
    action: '',
  },
  {
    key: '8',
    firstName: 'Marvin',
    lastName: 'Cooper',
    email: 'd.s@example.com',
    status: 'In Review',
    role: 'Technical Lead',
    action: '',
  },
];

export const InviteTeamMembers = [
  {
    email: 'jessy.j@example.com',
    role: 'Accountant',
  },
  {
    email: 'mark.t@example.com',
    role: 'Admiinistrator',
  },
  {
    email: 'shane.p@example.com',
    role: 'Accountant',
  },
];

export const InviteTeamDropDown = [
  {
    title: 'Accountant',
    key: 'Accountant',
  },
  {
    title: 'Admiinistrator',
    key: 'Admiinistrator',
  },
];

export const EntityGraphCards: GraphCardProps[] = [
  {
    type: GRAPH_TYPE.INCREASING,
    title: 'currentBalance',
    value: '$ 520,240',
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'chargeBacks',
    value: '$240',
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'reservesHeld',
    value: '$30,000',
    increasePercent: 21,
    showInfoIcon: false,
  },
  {
    type: GRAPH_TYPE.INCREASING,
    title: 'monthToDateNetDeposits',
    value: '$520,240',
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'forecastedDeposits',
    value: '$45,240',
    increasePercent: 40,
    showInfoIcon: false,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'depositThisMonth',
    value: '$11,211',
    increasePercent: 40,
    showInfoIcon: false,
  },
];

export const AccountingFirmDirectoryData: AccountingFirmDirectoryDataType[] = [
  {
    image: PolyMath,
    title: 'PolyMath',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Abstergo,
    title: 'Abstergo Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: BigKahunaBurger,
    title: 'Big Kahuna Burger Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Acme,
    title: 'Acme Co.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: PolyMath,
    title: 'PolyMath',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Abstergo,
    title: 'Abstergo Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: BigKahunaBurger,
    title: 'Big Kahuna Burger Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Acme,
    title: 'Acme Co.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: PolyMath,
    title: 'PolyMath',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Abstergo,
    title: 'Abstergo Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: BigKahunaBurger,
    title: 'Big Kahuna Burger Ltd.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
  {
    image: Acme,
    title: 'Acme Co.',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ipsam iusto enim?',
  },
];

export const ChartOfAccountsTypeTableColumns: TableColumnTypes[] = [
  {
    key: 'transactionDate',
    label: 'Transaction Date',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'description',
    label: 'Description',
    type: CUSTOM_CELL_TYPE.DESCRIPTOR,
  },
  {
    key: 'coded',
    label: 'Coded',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'memo',
    label: 'Memo',
    type: CUSTOM_CELL_TYPE.DESCRIPTOR,
  },
  {
    key: 'amount',
    label: 'Amount',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'balance',
    label: 'Balance',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
];

export const ChartOfAccountsTypeTableRows: TableRowTypes[] = [
  {
    key: '1',
    transactionDate: '29/02/2024',
    description: 'Best Buy - Purchase #1001',
    coded: 'Create Rule Set',
    memo: 'Purchased Laptop for Employee',
    amount: '-$1,000.00',
    balance: '$10,000.00',
  },
  {
    key: '2',
    transactionDate: '30/02/2024',
    description: 'Invoice Payment Received #1004',
    coded: 'Create Rule Set',
    memo: 'Purchased Laptop for Employee',
    amount: '-$1,000.00',
    balance: '$10,000.00',
  },
  {
    key: '3',
    transactionDate: '29/02/2024',
    description: 'Invoice Payment Received #1004',
    coded: 'Reconciled Clearing Account',
    memo: 'Payment from XYZ Corp',
    amount: '$1,000.00',
    balance: '$10,000.00',
  },
  {
    key: '4',
    transactionDate: '29/02/2024',
    description: 'Best Buy - Purchase #1001',
    coded: 'Create Rule Set',
    memo: 'Purchased Laptop for Employee',
    amount: '-$1,000.00',
    balance: '$10,000.00',
  },
  {
    key: '5',
    transactionDate: '29/02/2024',
    description: 'Best Buy - Purchase #1001',
    coded: 'Create Rule Set',
    memo: 'Purchased Laptop for Employee',
    amount: '-$1,000.00',
    balance: '$10,000.00',
  },
];

export const DummyEmails = [
  { name: 'jessy.j@gmail.com', value: 'jessy.j@gmail.com' },
  { name: 'andy.j@gmail.com', value: 'andy.j@gmail.com' },
  { name: 'peter@gmail.com', value: 'peter@gmail.com' },
  { name: 'darrel@gmail.com', value: 'darrel@gmail.com' },
  { name: 'steward@gmail.com', value: 'steward@gmail.com' },
];

export const DummyEntitiesSuggestions = [
  { name: 'Entity 1', value: 'Entity 1' },
  { name: 'Entity 2', value: 'Entity 2' },
  { name: 'Entity 3', value: 'Entity 3' },
  { name: 'Entity 4', value: 'Entity 4' },
  { name: 'Entity 5', value: 'Entity 5' },
];

export const DummySelectOptions: SelectOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const SettingRolesTableColumns: TableColumnTypes[] = [
  {
    key: 'roleName',
    label: 'Role Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'teamMembers',
    label: '# of Team Members',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const SettingRolesTableRows: TableRowTypes[] = [
  {
    key: '1',
    roleName: 'Administrator',
    teamMembers: '09',
    action: '',
  },
  {
    key: '2',
    roleName: 'Finance Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '3',
    roleName: 'Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '4',
    roleName: 'Lead Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '5',
    roleName: 'Administrator',
    teamMembers: '09',
    action: '',
  },
  {
    key: '6',
    roleName: 'Finance Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '7',
    roleName: 'Tony Reichert',
    teamMembers: '09',
    action: '',
  },
  {
    key: '8',
    roleName: 'Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '9',
    roleName: 'Lead Manager',
    teamMembers: '09',
    action: '',
  },
  {
    key: '10',
    roleName: 'Administrator',
    teamMembers: '09',
    action: '',
  },
];

export const SettingEditRolesTableColumns: TableColumnTypes[] = [
  {
    key: 'firstName',
    label: 'First Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'email',
    label: 'Email',
    type: CUSTOM_CELL_TYPE.LINK,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'assignedDate',
    label: 'Assigned Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const SettingEditRolesTableRows: TableRowTypes[] = [
  {
    key: '1',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Active',
    assignedDate: '22 Jan, 2024',
    action: '',
  },
  {
    key: '2',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Active',
    assignedDate: '22 Jan, 2024',
    action: '',
  },
  {
    key: '3',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Active',
    assignedDate: '22 Jan, 2024',
    action: '',
  },
  {
    key: '4',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Active',
    assignedDate: '22 Jan, 2024',
    action: '',
  },
  {
    key: '5',
    firstName: 'Darrell',
    lastName: 'Steward',
    email: 'darrel.s@example.com',
    status: 'Active',
    assignedDate: '22 Jan, 2024',
    action: '',
  },
];

export const BillingInvoicesTableColum: TableColumnTypes[] = [
  {
    key: 'invoices',
    label: 'Invoices',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'invoiceDate',
    label: 'Invoice Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'dueDate',
    label: 'Due Date',
    type: CUSTOM_CELL_TYPE.DATE,
  },
  {
    key: 'status',
    label: 'Status',
    type: CUSTOM_CELL_TYPE.BADGE,
  },
  {
    key: 'amount',
    label: 'Amount',
    type: CUSTOM_CELL_TYPE.TEXT,
  },
  {
    key: 'action',
    label: 'Action',
    type: CUSTOM_CELL_TYPE.ACTION,
  },
];

export const BillingInvoicesTableRows: TableRowTypes[] = [
  {
    key: '1',
    invoices: 'Invoice#006-356',
    invoiceDate: '22 Jan, 2024',
    dueDate: '25 Jan, 2024',
    status: 'Paid',
    amount: '$20.000',
    action: '',
  },
  {
    key: '2',
    invoices: 'Invoice#006-356',
    invoiceDate: '22 Jan, 2024',
    dueDate: '25 Jan, 2024',
    status: 'Unpaid',
    amount: '$$30.000',
    action: '',
  },
  {
    key: '3',
    invoices: 'Invoice#006-356',
    invoiceDate: '22 Jan, 2024',
    dueDate: '25 Jan, 2024',
    status: 'Paid',
    amount: '$15.000',
    action: '',
  },
  {
    key: '4',
    invoices: 'Invoice#006-356',
    invoiceDate: '22 Jan, 2024',
    dueDate: '25 Jan, 2024',
    status: 'Unpaid',
    amount: '$20.000',
    action: '',
  },
  {
    key: '5',
    invoices: 'Invoice#006-356',
    invoiceDate: '22 Jan, 2024',
    dueDate: '25 Jan, 2024',
    status: 'Paid',
    amount: '$22.000',
    action: '',
  },
];

export const DummyEntities = [
  {
    key: 'Quantum Dynamics',
    title: 'Quantum Dynamics',
  },
  {
    key: 'Steller Information',
    title: 'Steller Information',
  },
  {
    key: 'Quantum ',
    title: 'Quantum Dynamics',
  },
  {
    key: 'Steller ',
    title: 'Steller Information',
  },
];

export const DummyEntitiesDropdown = [
  {
    value: 'Entity 1',
    name: 'Entity 1',
  },
  {
    value: 'Entity 2',
    name: 'Entity 2',
  },
  {
    value: 'Entity 3',
    name: 'Entity 3',
  },
  {
    value: 'Entity 4',
    name: 'Entity 4',
  },
];

export const DummyPaymentMethodsData: PaymentMethodsTypes[] = [
  {
    id: 'visa',
    title: 'Visa ending in 1234',
    expiryDate: '06/2024',
    image: Visa,
  },
  {
    id: 'mastercard',
    title: 'Mastercard ending in 1234',
    expiryDate: '06/2024',
    image: MasterCardIcon,
  },
  {
    id: 'apple',
    title: 'Applecard ending in 1234',
    expiryDate: '06/2024',
    image: ApplePay,
  },
];

export const RevenueCards: GraphCardProps[] = [
  {
    type: GRAPH_TYPE.INCREASING,
    title: 'totalNoOfInvoices',
    value: 120,
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'unpaidInvoices',
    value: 80,
    increasePercent: 40,
  },
  {
    type: GRAPH_TYPE.DECREASING,
    title: 'paidInvoices',
    value: 40,
    increasePercent: 21,
  },
];

export const RevenueCountryCards: RevenueCardDataType[] = [
  {
    image: USFlag,
    title: 'unitedStates',
    persentage: 50,
  },
  {
    image: IndiaFlag,
    title: 'india',
    persentage: 30,
  },
  {
    image: UKFlag,
    title: 'unitedKingdom',
    persentage: 20,
  },
  {
    image: AustraliaFlag,
    title: 'australia',
    persentage: 10,
  },
  {
    image: CanadaFlag,
    title: 'canada',
    persentage: 10,
  },
];

// User and its permissions
export const dummyUser = {
  user: {
    firstName: 'Test Firstname',
    lastName: 'Test Lastname',
    role: 'admin',
  },
  permissions: {
    workspaces: [USERPERMISSIONS.CAN_READ, USERPERMISSIONS.CAN_UPDATE],
    entities: [
      USERPERMISSIONS.CAN_READ,
      USERPERMISSIONS.CAN_UPDATE,
      USERPERMISSIONS.CAN_MANAGE,
    ],
    users: [USERPERMISSIONS.CAN_READ],
    staff: [
      USERPERMISSIONS.CAN_READ,
      USERPERMISSIONS.CAN_DELETE,
      USERPERMISSIONS.CAN_MANAGE,
    ],
  },
};

export const DummyNotifications = [
  {
    date: 'New',
    notifications: [
      {
        image: ProfileImage,
        title: 'Sadou Mokaté',
        description: 'has invited you to join their workspace.',
        time: '12 minutes ago',
      },
      {
        image: ProfileImage,
        title: 'Sadou Mokaté',
        description: 'has invited you to join their workspace.',
        time: '12 minutes ago',
      },
    ],
  },
  {
    date: 'Yesterday',
    notifications: [
      {
        image: ProfileImage,
        title: 'Sadou Mokaté',
        description: 'has invited you to join their workspace.',
        time: '12 minutes ago',
      },
      {
        image: ProfileImage,
        title: 'Sadou Mokaté',
        description: 'has invited you to join their workspace.',
        time: '12 minutes ago',
      },
    ],
  },
];

export const ExistingBankAccounts: BankAccountTypes[] = [
  {
    bankName: 'bankOfAmerica',
    accountNumber: '**** **** **** 2102',
    routingNumber: '**** **** **** 4589',
  },
  {
    bankName: 'mxBank',
    accountNumber: '**** **** **** 5486',
    routingNumber: '**** **** **** 1834',
  },
  {
    bankName: 'capitalOne',
    accountNumber: '**** **** **** 6834',
    routingNumber: '**** **** **** 9421',
  },
];

export const DummyWorkspaces: WorkspaceType[] = [
  {
    id: '870ea6b2-338d-4760-8699-7f55d6bd1782',
    name: 'Workspace Test',
    phone: '090909',
    email: 'darius@numasync.com',
    logoUrl: null,
    createdAt: '2024-05-11T06:53:46.659Z',
    updatedAt: null,
    url: 'https://',
    customRoleId: 'a9f24e74-01a5-4577-b659-6919fdac94ac',
    createdBy: '4a434868-272e-44ce-bf5b-028bfb1bb5ed',
    description: null,
    ownerFullname: ' ',
    memberCount: 0,
  },
  {
    id: 'c058316f-5a6d-4060-9a19-a18113d8340e',
    name: "Fa's workspace",
    phone: '090909',
    email: 'test@numasync.com',
    logoUrl: null,
    createdAt: '2024-05-10T08:19:00.522Z',
    updatedAt: null,
    url: 'https://',
    customRoleId: '209c4969-45da-4b6d-88d1-f0874601fb1b',
    createdBy: '4a434868-272e-44ce-bf5b-028bfb1bb5ed',
    description: null,
    ownerFullname: ' ',
    memberCount: 0,
  },
  {
    id: 'e641681f-ef98-445c-b276-e9050f379488',
    name: "Darius's Test",
    phone: '3234470109',
    email: 'dariusWorkspace@numasync.com',
    logoUrl: null,
    createdAt: '2024-05-07T19:04:19.974Z',
    updatedAt: null,
    url: 'numasync.com',
    customRoleId: 'a2b3d295-f39f-4916-9cf7-cb48cef47f6c',
    createdBy: '4a434868-272e-44ce-bf5b-028bfb1bb5ed',
    description: null,
    ownerFullname: ' ',
    memberCount: 1,
  },
];
