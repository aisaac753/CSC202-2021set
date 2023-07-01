import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { ClinicrecordsModule } from './clinicrecords/clinicrecords.module';

@Module({
  imports: [PatientsModule, ClinicrecordsModule]
})
export class PatientmanagementModule {}
