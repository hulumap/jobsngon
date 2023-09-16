import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online6Component } from './online6.component';

describe('Online6Component', () => {
  let component: Online6Component;
  let fixture: ComponentFixture<Online6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
