import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentSelectorComponent } from './intent-selector.component';

describe('IntentSelectorComponent', () => {
  let component: IntentSelectorComponent;
  let fixture: ComponentFixture<IntentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
