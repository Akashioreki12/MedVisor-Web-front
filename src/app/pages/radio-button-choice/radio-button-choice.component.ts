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
  

   @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}


}
