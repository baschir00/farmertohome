import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfarmerComponent } from './registerfarmer.component';

describe('RegisterfarmerComponent', () => {
  let component: RegisterfarmerComponent;
  let fixture: ComponentFixture<RegisterfarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
