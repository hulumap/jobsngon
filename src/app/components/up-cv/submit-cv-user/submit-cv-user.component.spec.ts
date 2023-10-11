import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCvUserComponent } from './submit-cv-user.component';

describe('SubmitCvUserComponent', () => {
  let component: SubmitCvUserComponent;
  let fixture: ComponentFixture<SubmitCvUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCvUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCvUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
