import { TestBed, inject } from '@angular/core/testing';

import { CourseMockService } from './course-mock.service';

describe('CourseMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseMockService]
    });
  });

  it('should be created', inject([CourseMockService], (service: CourseMockService) => {
    expect(service).toBeTruthy();
  }));
});
