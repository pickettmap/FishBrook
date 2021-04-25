import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardlistComponent } from './leaderboardlist.component';

describe('LeaderboardlistComponent', () => {
  let component: LeaderboardlistComponent;
  let fixture: ComponentFixture<LeaderboardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
