import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterLoveComponent } from './letter-love.component';

describe('LetterLoveComponent', () => {
  let component: LetterLoveComponent;
  let fixture: ComponentFixture<LetterLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterLoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
