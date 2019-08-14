import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminProductsComponent } from './display-admin-products.component';

describe('DisplayAdminProductsComponent', () => {
  let component: DisplayAdminProductsComponent;
  let fixture: ComponentFixture<DisplayAdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdminProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
