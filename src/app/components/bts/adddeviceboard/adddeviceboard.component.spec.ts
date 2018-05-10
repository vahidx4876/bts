import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeviceboardComponent } from './adddeviceboard.component';

describe('AdddeviceboardComponent', () => {
  let component: AdddeviceboardComponent;
  let fixture: ComponentFixture<AdddeviceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeviceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeviceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
