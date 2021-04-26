import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatchPageComponent } from './view-catch-page.component';

describe('ViewCatchPageComponent', () => {
  let component: ViewCatchPageComponent;
  let fixture: ComponentFixture<ViewCatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCatchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
