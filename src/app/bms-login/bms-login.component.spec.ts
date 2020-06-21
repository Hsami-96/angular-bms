import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsLoginComponent } from './bms-login.component';

describe('BmsLoginComponent', () => {
  let component: BmsLoginComponent;
  let fixture: ComponentFixture<BmsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
