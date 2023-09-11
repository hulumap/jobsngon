import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsngonHelpComponent } from './jobsngon-help.component';

describe('JobsngonHelpComponent', () => {
  let component: JobsngonHelpComponent;
  let fixture: ComponentFixture<JobsngonHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsngonHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsngonHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
