import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductsTableComponent } from './display-products-table.component';

describe('DisplayProductsTableComponent', () => {
  let component: DisplayProductsTableComponent;
  let fixture: ComponentFixture<DisplayProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
