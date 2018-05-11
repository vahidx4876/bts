import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgalleryComponent } from './modalgallery.component';

describe('ModalgalleryComponent', () => {
  let component: ModalgalleryComponent;
  let fixture: ComponentFixture<ModalgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
