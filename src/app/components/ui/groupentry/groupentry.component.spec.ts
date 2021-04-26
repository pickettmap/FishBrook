import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupentryComponent } from './groupentry.component';

describe('GroupentryComponent', () => {
  let component: GroupentryComponent;
  let fixture: ComponentFixture<GroupentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
