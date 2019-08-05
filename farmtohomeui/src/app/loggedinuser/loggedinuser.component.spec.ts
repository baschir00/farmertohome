import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinuserComponent } from './loggedinuser.component';

describe('LoggedinuserComponent', () => {
  let component: LoggedinuserComponent;
  let fixture: ComponentFixture<LoggedinuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
