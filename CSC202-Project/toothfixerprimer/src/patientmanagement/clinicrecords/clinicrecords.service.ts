import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicrecordDto } from '../clinicrecords/dto/create-clinicrecord.dto';
import { UpdateClinicrecordDto } from '../clinicrecords/dto/update-clinicrecord.dto';
import { Clinicrecord } from './entities/clinicrecord.entity';
@Injectable()
export class ClinicrecordsService {
constructor(
//inject user repository for use here in UsersService as if it is part of the class
@InjectRepository(Clinicrecord)
private clinicrecordRepository: Repository<Clinicrecord>
){}
async create(CreateClinicrecordDto: CreateClinicrecordDto) {
const newClinicrecord: Clinicrecord = this.clinicrecordRepository.create(CreateClinicrecordDto)
return this.clinicrecordRepository.save(newClinicrecord);
//return 'This action adds a new user';
}
async findAll() {
//return `This action returns all users`;
return await this.clinicrecordRepository.find();
}
async findOne(id: number) {
  //return `This action returns a #${id} user`;
  return await this.clinicrecordRepository.findOne({
  where: {
  id // same as id:id
  }
  });
  }
  async update(id: number, updateClinicrecordDto: UpdateClinicrecordDto) {
  //return `This action updates a #${id} user`;
  return await this.clinicrecordRepository.update(id, updateClinicrecordDto);
  }
  async remove(id: number) {
  //return `This action removes a #${id} user`;
  return await this.clinicrecordRepository.delete(id);
  }
  }