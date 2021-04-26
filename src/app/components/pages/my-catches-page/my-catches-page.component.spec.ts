import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCatchesPageComponent } from './my-catches-page.component';

describe('MyCatchesPageComponent', () => {
  let component: MyCatchesPageComponent;
  let fixture: ComponentFixture<MyCatchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCatchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
