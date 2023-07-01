import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicrecordDto } from './create-clinicrecord.dto';

export class UpdateClinicrecordDto extends PartialType(CreateClinicrecordDto) {}
