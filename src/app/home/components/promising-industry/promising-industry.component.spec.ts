import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisingIndustryComponent } from './promising-industry.component';

describe('PromisingIndustryComponent', () => {
  let component: PromisingIndustryComponent;
  let fixture: ComponentFixture<PromisingIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisingIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisingIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
