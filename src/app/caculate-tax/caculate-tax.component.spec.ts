import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculateTaxComponent } from './caculate-tax.component';

describe('CaculateTaxComponent', () => {
  let component: CaculateTaxComponent;
  let fixture: ComponentFixture<CaculateTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaculateTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculateTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
