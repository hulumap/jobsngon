import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTodayComponent } from './letter-today.component';

describe('LetterTodayComponent', () => {
  let component: LetterTodayComponent;
  let fixture: ComponentFixture<LetterTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
