import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';

@Module({
  exports: [PatientService],
  providers: [PatientService],
})
export class PatientModule {}
