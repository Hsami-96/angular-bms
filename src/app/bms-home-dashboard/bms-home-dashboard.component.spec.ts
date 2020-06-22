import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsHomeDashboardComponent } from './bms-home-dashboard.component';

describe('BmsHomeDashboardComponent', () => {
  let component: BmsHomeDashboardComponent;
  let fixture: ComponentFixture<BmsHomeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsHomeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsHomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
