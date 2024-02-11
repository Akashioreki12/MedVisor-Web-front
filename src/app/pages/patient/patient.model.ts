export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string; // You can use Date type if you prefer
    gender: string;
    age: number;
    address: string;
    phoneNumber: string;
    cin: string;
    clinicalInfo: any;
  }
  