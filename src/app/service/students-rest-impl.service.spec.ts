import { TestBed, inject } from '@angular/core/testing';

import { StudentsRestImplService } from './students-rest-impl.service';

describe('StudentsRestImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsRestImplService]
    });
  });

  it('should be created', inject([StudentsRestImplService], (service: StudentsRestImplService) => {
    expect(service).toBeTruthy();
  }));
});
