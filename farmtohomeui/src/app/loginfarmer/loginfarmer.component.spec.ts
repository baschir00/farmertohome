import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfarmerComponent } from './loginfarmer.component';

describe('LoginfarmerComponent', () => {
  let component: LoginfarmerComponent;
  let fixture: ComponentFixture<LoginfarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
