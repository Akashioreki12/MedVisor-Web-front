import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input-field.component.html',
  styleUrl: './text-input-field.component.css'
})
export class TextInputFieldComponent {
  @Input() label: string="label";
  @Input() placeHolder: string = "placeHolder";
  @Input() ngClassInput: any;
  @Input() errorList: string[] = [];
  
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() inputClicked: EventEmitter<void> = new EventEmitter(); 
  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
  }
  
  onInputClick() {
    // Emit the event when the input is clicked
    this.inputClicked.emit();
  }


  
}
