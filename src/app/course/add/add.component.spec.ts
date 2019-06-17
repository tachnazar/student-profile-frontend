
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: CourseAddComponent;
  let fixture: ComponentFixture<CourseAddComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
