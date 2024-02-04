import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonChoiceComponent } from './radio-button-choice.component';

describe('RadioButtonChoiceComponent', () => {
  let component: RadioButtonChoiceComponent;
  let fixture: ComponentFixture<RadioButtonChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioButtonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
