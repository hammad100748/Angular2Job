import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatejsonComponent } from './validatejson.component';

describe('ValidatejsonComponent', () => {
  let component: ValidatejsonComponent;
  let fixture: ComponentFixture<ValidatejsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatejsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
