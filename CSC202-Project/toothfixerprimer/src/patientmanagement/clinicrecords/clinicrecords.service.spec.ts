import { Test, TestingModule } from '@nestjs/testing';
import { ClinicrecordsService } from './clinicrecords.service';

describe('ClinicrecordsService', () => {
  let service: ClinicrecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicrecordsService],
    }).compile();

    service = module.get<ClinicrecordsService>(ClinicrecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
