import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-number-field',
  standalone: true,
  imports: [],
  templateUrl: './phone-number-field.component.html',
  styleUrl: './phone-number-field.component.css'
})
export class PhoneNumberFieldComponent {
   @Output() valueChange: EventEmitter<any> = new EventEmitter();
  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}

}
