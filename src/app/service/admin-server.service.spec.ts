import { TestBed, inject } from '@angular/core/testing';

import { AdminServerService } from './admin-server.service';

describe('AdminServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminServerService]
    });
  });

  it('should be created', inject([AdminServerService], (service: AdminServerService) => {
    expect(service).toBeTruthy();
  }));
});
