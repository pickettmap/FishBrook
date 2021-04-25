import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfishgridComponent } from './myfishgrid.component';

describe('MyfishgridComponent', () => {
  let component: MyfishgridComponent;
  let fixture: ComponentFixture<MyfishgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfishgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfishgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
