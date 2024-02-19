import { Component, Output, EventEmitter,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-phone-number-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-number-field.component.html',
  styleUrl: './phone-number-field.component.css'
})
export class PhoneNumberFieldComponent {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() selectChange: EventEmitter<any> = new EventEmitter();
  
  @Input() placeHolder: string = "";
  @Input() label: string="";

  @Input() ngClassInput: any;
  @Input() errorList: string[] = [];

    @Output() inputClicked: EventEmitter<void> = new EventEmitter(); 



  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
  }
  
  onSelectChange(event: any) {
    const value = event.target.value;
    this.selectChange.emit(value);
  }
  
  onInputClick() {
    this.inputClicked.emit();
  }

}
