export interface Patient {
  age: number;
  date_of_birth: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticList[];
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: Array<string>;
  name: string;
  phone_number: string;
  profile_picture: string;
}

export interface DiagnosisHistory {
  blood_pressure: BloodPressure;
  heart_rate: Info;
  month: string;
  respiratory_rate: Info;
  temperature: Info;
  year: number;
}

export interface BloodPressure {
  diastolic: Info;
  systolic: Info;
}

export interface DiagnosticList {
  description: string;
  name: string;
  status: string;
}

interface Info {
  levels: string;
  value: number;
}