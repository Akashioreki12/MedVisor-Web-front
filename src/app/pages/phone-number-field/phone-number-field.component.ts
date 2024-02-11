import { Component, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-phone-number-field',
  standalone: true,
  imports: [],
  templateUrl: './phone-number-field.component.html',
  styleUrl: './phone-number-field.component.css'
})
export class PhoneNumberFieldComponent {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  
  @Input() placeHolder: string = "";
  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}

}
