import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnrolledComponent } from './list-enrolled.component';

describe('ListEnrolledComponent', () => {
  let component: ListEnrolledComponent;
  let fixture: ComponentFixture<ListEnrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
