import { Test, TestingModule } from '@nestjs/testing';
import { ClinicrecordsController } from './clinicrecords.controller';
import { ClinicrecordsService } from './clinicrecords.service';

describe('ClinicrecordsController', () => {
  let controller: ClinicrecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicrecordsController],
      providers: [ClinicrecordsService],
    }).compile();

    controller = module.get<ClinicrecordsController>(ClinicrecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
