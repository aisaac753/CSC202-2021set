import { Module } from '@nestjs/common';
import { ClinicrecordsService } from './clinicrecords.service';
import { ClinicrecordsController } from './clinicrecords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinicrecord } from './entities/clinicrecord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clinicrecord])],
  controllers: [ClinicrecordsController],
  providers: [ClinicrecordsService]
})
export class ClinicrecordsModule {}







