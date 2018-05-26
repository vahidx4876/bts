import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsChartJsComponent } from './bts-chart-js.component';

describe('BtsChartJsComponent', () => {
  let component: BtsChartJsComponent;
  let fixture: ComponentFixture<BtsChartJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsChartJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
