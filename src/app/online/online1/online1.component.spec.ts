import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Online1Component } from './online1.component';

describe('Online1Component', () => {
  let component: Online1Component;
  let fixture: ComponentFixture<Online1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Online1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Online1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
