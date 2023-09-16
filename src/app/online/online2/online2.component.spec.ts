import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online2Component } from './online2.component';

describe('Online2Component', () => {
  let component: Online2Component;
  let fixture: ComponentFixture<Online2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
