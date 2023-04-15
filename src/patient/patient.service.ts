import { Injectable } from '@nestjs/common';
import { Patient } from './patient.model';

@Injectable()
export class PatientService {
  private readonly patients: Patient[] = [];
  private newId = 1;
  async register({ name }: Patient): Promise<Patient> {
    const patient = {
      id: this.newId++,
      name,
    };
    this.patients.push(patient);
    return patient;
  }

  async doesPatientExist(id: number): Promise<boolean> {
    return this.patients.some((patient) => patient.id === id);
  }
}
