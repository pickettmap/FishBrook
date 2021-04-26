import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardentryComponent } from './leaderboardentry.component';

describe('LeaderboardentryComponent', () => {
  let component: LeaderboardentryComponent;
  let fixture: ComponentFixture<LeaderboardentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
