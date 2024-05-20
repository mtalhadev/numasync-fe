export type PasswordResetFormData = {
  password: string;
  confirmPassword: string;
};

export interface VisibilityState {
  password: boolean;
  confirmPassword: boolean;
}
