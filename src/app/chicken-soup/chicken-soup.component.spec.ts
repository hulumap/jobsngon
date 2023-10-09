import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenSoupComponent } from './chicken-soup.component';

describe('ChickenSoupComponent', () => {
  let component: ChickenSoupComponent;
  let fixture: ComponentFixture<ChickenSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenSoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
