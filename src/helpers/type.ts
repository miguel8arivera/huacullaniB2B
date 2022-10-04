export type FormProductRegister = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type FormFormikbasic = {
  firstName: string;
  lastName: string;
  email: string;
  onSubmit?: () => void;
};
