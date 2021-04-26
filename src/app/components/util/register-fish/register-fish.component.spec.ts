import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFishComponent } from './register-fish.component';

describe('RegisterFishComponent', () => {
  let component: RegisterFishComponent;
  let fixture: ComponentFixture<RegisterFishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
