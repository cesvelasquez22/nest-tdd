import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should return a new patient with given name', async () => {
      const patient = await service.register({ name: 'John Doe' });

      expect(patient).toEqual({
        id: expect.any(Number),
        name: 'John Doe',
      });
    });
  });

  describe('doesPatientExist', () => {
    it('should return true if patient exists', async () => {
      const patient = await service.register({ name: 'John Doe' });

      const doesPatientExist = await service.doesPatientExist(patient.id);

      expect(doesPatientExist).toBe(true);
    });

    it('should return false if patient does not exist', async () => {
      const doesPatientExist = await service.doesPatientExist(1);

      expect(doesPatientExist).toBe(false);
    });
  });

  it('should return different ids when called twice with the same name', async () => {
    const patient1 = await service.register({ name: 'John Doe' });
    const patient2 = await service.register({ name: 'John Doe' });

    // expect(patient1.id).not.toBe(patient2.id); // This is also valid
    expect(patient1).not.toEqual(patient2);
  });
});
