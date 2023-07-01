import { Controller, Get, Post, Body, Put, Param, Delete,
  Render } from '@nestjs/common';
  import { ClinicrecordsService } from './clinicrecords.service';
  import { CreateClinicrecordDto } from './dto/create-Clinicrecord.dto';
import { UpdateClinicrecordDto } from './dto/update-clinicrecord.dto';  
  @Controller('Clinicrecord')
  export class ClinicrecordsController {
  constructor(private readonly clinicrecordsService: ClinicrecordsService) {}

  @Post()
  create(@Body() CreateClinicrecordDto: CreateClinicrecordDto) {
  return this.clinicrecordsService.create(CreateClinicrecordDto);
  }
  @Get()
  findAll() {
  return this.clinicrecordsService.findAll();
  }
  @Get(':id')
findOne(@Param('id') id: string) {
return this.clinicrecordsService.findOne(+id);
}
@Put(':id')
update(@Param('id') id: string, @Body() updateClinicrecordDto:
UpdateClinicrecordDto) {
  return this.clinicrecordsService.update(+id, updateClinicrecordDto);
}
@Delete(':id')
remove(@Param('id') id: string) {
return this.clinicrecordsService.remove(+id);
}
}