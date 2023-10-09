import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterContentComponent } from './letter-content.component';

describe('LetterContentComponent', () => {
  let component: LetterContentComponent;
  let fixture: ComponentFixture<LetterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
