import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online3Component } from './online3.component';

describe('Online3Component', () => {
  let component: Online3Component;
  let fixture: ComponentFixture<Online3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
