import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-number-input-field',
  standalone: true,
  imports: [],
  templateUrl: './number-input-field.component.html',
  styleUrl: './number-input-field.component.css'
})
export class NumberInputFieldComponent {

  @Input() label: string = "label";

   @Output() valueChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
}

}
