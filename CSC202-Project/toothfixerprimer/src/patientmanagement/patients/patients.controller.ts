import { Controller, Get, Post, Body, Put, Param, Delete,
  Render } from '@nestjs/common';
  import { PatientsService } from './patients.service';
  import { CreatePatientDto } from './dto/create-patient.dto';
  import { UpdatePatientDto } from './dto/update-patient.dto';
  
  @Controller('Patient')
  export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() CreatePatientDto: CreatePatientDto) {
  return this.patientsService.create(CreatePatientDto);
  }
  @Get()
  findAll() {
  return this.patientsService.findAll();
  }
  @Get(':id')
findOne(@Param('id') id: string) {
return this.patientsService.findOne(+id);
}
@Put(':id')
update(@Param('id') id: string, @Body() updatePatientDto:
UpdatePatientDto) {
return this.patientsService.update(+id, updatePatientDto);
}
@Delete(':id')
remove(@Param('id') id: string) {
return this.patientsService.remove(+id);
}
}