import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-number-input-field',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './number-input-field.component.html',
  styleUrl: './number-input-field.component.css'
})
export class NumberInputFieldComponent {

  @Input() label: string = "label";
  @Input() value: number = 0.00;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  
  @Input() ngClassInput: any;
  @Input() errorList: string[] = [];

  @Output() inputClicked: EventEmitter<void> = new EventEmitter(); 


  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
  }
  
  onInputClick() {
    this.inputClicked.emit();
  }

}
