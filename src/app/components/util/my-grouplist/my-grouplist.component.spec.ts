import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGrouplistComponent } from './my-grouplist.component';

describe('MyGrouplistComponent', () => {
  let component: MyGrouplistComponent;
  let fixture: ComponentFixture<MyGrouplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGrouplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
