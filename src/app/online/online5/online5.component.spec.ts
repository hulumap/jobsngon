import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online5Component } from './online5.component';

describe('Online5Component', () => {
  let component: Online5Component;
  let fixture: ComponentFixture<Online5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
