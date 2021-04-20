import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchDisplayComponent } from './catch-display.component';

describe('CatchDisplayComponent', () => {
  let component: CatchDisplayComponent;
  let fixture: ComponentFixture<CatchDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
