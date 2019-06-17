import { TestBed, inject } from '@angular/core/testing';

import { LecturerServerService } from './lecturer-server.service';

describe('LecturerServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecturerServerService]
    });
  });

  it('should be created', inject([LecturerServerService], (service: LecturerServerService) => {
    expect(service).toBeTruthy();
  }));
});
