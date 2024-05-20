import { WorkspaceType } from './commonTypes';
import { LoginApiData } from './form/login';

export type GlobalTypes = {
  global: {
    sidebarCollapsed: boolean;
    user: boolean;
  };
  userReducer: {
    // TODO: Update the fields of user here once it is confirmed in which format we will be getting data from /me api
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: LoginApiData['user'];
    selectedWorkspace: WorkspaceType;
  };
};
