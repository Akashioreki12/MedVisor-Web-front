import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-choice-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choice-input-field.component.html',
  styleUrl: './choice-input-field.component.css'
})
export class ChoiceInputFieldComponent {

  @Input() label: string = "label";
    @Input() options: string[] = ["Rural", "Urban"];

    @Input() defaultValue: string = "";
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
