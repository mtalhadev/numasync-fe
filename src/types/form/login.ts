import { WorkspaceType } from '../commonTypes';

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginApiData = {
  session: {
    accessToken: string;
    expiresAt: number;
    refreshToken: string;
  };
  user: {
    id: string;
    avatarUrl: string | null;
    firstName: string | null;
    lastName: string | null;
    invitationId: string | null;
    onboardingCompletedAt: Date | null;
    passwordExpiresAt: Date;
    timezone: string;
    updatedAt: Date | null;
    email: string;
    emailConfirmedAt: Date;
    createdAt: Date;
    isAdmin: boolean;
    workspaces: WorkspaceType[] | [];
  };
};
