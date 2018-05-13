import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcrudtableComponent } from './ccrudtable.component';

describe('CcrudtableComponent', () => {
  let component: CcrudtableComponent;
  let fixture: ComponentFixture<CcrudtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcrudtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcrudtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
