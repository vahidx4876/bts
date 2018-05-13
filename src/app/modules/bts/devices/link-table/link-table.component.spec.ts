import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTableComponent } from './link-table.component';

describe('LinkTableComponent', () => {
  let component: LinkTableComponent;
  let fixture: ComponentFixture<LinkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
