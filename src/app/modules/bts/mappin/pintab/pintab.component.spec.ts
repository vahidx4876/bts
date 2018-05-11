import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintabComponent } from './pintab.component';

describe('PintabComponent', () => {
  let component: PintabComponent;
  let fixture: ComponentFixture<PintabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
