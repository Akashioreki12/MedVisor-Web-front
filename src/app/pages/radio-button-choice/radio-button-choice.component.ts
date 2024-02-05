import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button-choice',
  standalone: true,
  imports: [],
  templateUrl: './radio-button-choice.component.html',
  styleUrl: './radio-button-choice.component.css'
})
export class RadioButtonChoiceComponent {
  @Input() label: string="label";
  @Input() option1: string = "option1";
  @Input() option2: string = "option2";
    @Input() defaultValue: string = "Male"; // receiv
  

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    // Set the default value when the component is initialized
    this.valueChange.emit(this.defaultValue);
  }

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}


}
