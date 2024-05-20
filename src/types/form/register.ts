export type RegisterFormData = {
  firstName: string;
  lastName: string;
  orgName: string;
  phone: string;
  password: string;
  cPassword: string;
};

export type BillingDetailsFormData = {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  streetAddress: string;
  state: string;
  zipCode: string;
};

export type RegistrationPlatfromAdminFlow = {
  password: string;
  confirmPassword: string;
  timezone: string;
  agree: boolean;
};

export type RegistrationFirmAdminTypes = {
  firstName: string;
  lastName: string;
  orgName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  timezone: string;
  agree: boolean;
};

export type RegistrationClientTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  timezone: string;
  agree: boolean;
};
