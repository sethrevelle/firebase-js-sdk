export enum Operation {
  PASSWORD_RESET = 'PASSWORD_RESET',
  RECOVER_EMAIL = 'RECOVER_EMAIL',
  EMAIL_SIGNIN = 'EMAIL_SIGNIN',
  VERIFY_EMAIL = 'VERIFY_EMAIL'
}

export interface ActionCodeInfo {
  data: {
    email?: string | null;
    fromEmail?: string | null;
  };
  operation: string;
}