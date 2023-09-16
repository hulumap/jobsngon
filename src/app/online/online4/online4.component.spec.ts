import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online4Component } from './online4.component';

describe('Online4Component', () => {
  let component: Online4Component;
  let fixture: ComponentFixture<Online4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
