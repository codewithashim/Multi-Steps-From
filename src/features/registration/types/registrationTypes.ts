export interface RegistrationData {
    personalInfo: {
      fullName: string;
      email: string;
      phone: string;
    };
    address: {
      street: string;
      city: string;
      zipCode: string;
    };
    account: {
      username: string;
      password: string;
      confirmPassword: string;
    };
  }
  
  export type StepKey = "personalInfo" | "address" | "account";
  