import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHiringCompanyComponent } from './top-hiring-company.component';

describe('TopHiringCompanyComponent', () => {
  let component: TopHiringCompanyComponent;
  let fixture: ComponentFixture<TopHiringCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHiringCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHiringCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
