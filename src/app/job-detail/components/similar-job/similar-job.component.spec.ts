import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarJobComponent } from './similar-job.component';

describe('SimilarJobComponent', () => {
  let component: SimilarJobComponent;
  let fixture: ComponentFixture<SimilarJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
