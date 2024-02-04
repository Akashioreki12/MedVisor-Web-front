import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice-input-field',
  standalone: true,
  imports: [],
  templateUrl: './choice-input-field.component.html',
  styleUrl: './choice-input-field.component.css'
})
export class ChoiceInputFieldComponent {

  @Input() label: string = "label";

   @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}

}
