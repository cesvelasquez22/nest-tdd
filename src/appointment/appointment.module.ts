import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { PatientModule } from '../patient/patient.module';

@Module({
  imports: [PatientModule],
  providers: [AppointmentService],
})
export class AppointmentModule {}
