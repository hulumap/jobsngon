import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCvComponent } from './up-cv.component';

describe('UpCvComponent', () => {
  let component: UpCvComponent;
  let fixture: ComponentFixture<UpCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
