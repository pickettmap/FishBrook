import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGearComponent } from './register-gear.component';

describe('RegisterGearComponent', () => {
  let component: RegisterGearComponent;
  let fixture: ComponentFixture<RegisterGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
