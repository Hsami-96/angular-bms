import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsNavigationComponent } from './bms-navigation.component';

describe('BmsNavigationComponent', () => {
  let component: BmsNavigationComponent;
  let fixture: ComponentFixture<BmsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
