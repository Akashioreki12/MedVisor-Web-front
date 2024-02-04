import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input-field',
  standalone: true,
  imports: [],
  templateUrl: './text-input-field.component.html',
  styleUrl: './text-input-field.component.css'
})
export class TextInputFieldComponent {
  @Input() label: string="label";
  @Input() placeHolder: string = "placeHolder";
  
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}


  
}
