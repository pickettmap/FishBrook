import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdropdownComponent } from './groupdropdown.component';

describe('GroupdropdownComponent', () => {
  let component: GroupdropdownComponent;
  let fixture: ComponentFixture<GroupdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
