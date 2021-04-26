import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFishPageComponent } from './view-fish-page.component';

describe('ViewFishPageComponent', () => {
  let component: ViewFishPageComponent;
  let fixture: ComponentFixture<ViewFishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFishPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
