import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceInputFieldComponent } from './choice-input-field.component';

describe('ChoiceInputFieldComponent', () => {
  let component: ChoiceInputFieldComponent;
  let fixture: ComponentFixture<ChoiceInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceInputFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
