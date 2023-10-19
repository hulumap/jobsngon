import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSavedComponent } from './job-saved.component';

describe('JobSavedComponent', () => {
  let component: JobSavedComponent;
  let fixture: ComponentFixture<JobSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
