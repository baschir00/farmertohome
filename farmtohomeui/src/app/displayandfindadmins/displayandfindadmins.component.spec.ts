import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayandfindadminsComponent } from './displayandfindadmins.component';

describe('DisplayandfindadminsComponent', () => {
  let component: DisplayandfindadminsComponent;
  let fixture: ComponentFixture<DisplayandfindadminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayandfindadminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayandfindadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
