import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralbtsmapComponent } from './generalbtsmap.component';

describe('GeneralbtsmapComponent', () => {
  let component: GeneralbtsmapComponent;
  let fixture: ComponentFixture<GeneralbtsmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralbtsmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralbtsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
