import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoadalgaComponent } from './moadalga.component';

describe('MoadalgaComponent', () => {
  let component: MoadalgaComponent;
  let fixture: ComponentFixture<MoadalgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoadalgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoadalgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
