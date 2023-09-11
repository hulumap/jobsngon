import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCvComponent } from './banner-cv.component';

describe('BannerCvComponent', () => {
  let component: BannerCvComponent;
  let fixture: ComponentFixture<BannerCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
