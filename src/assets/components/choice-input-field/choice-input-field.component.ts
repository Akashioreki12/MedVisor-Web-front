import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-choice-input-field',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatSelectModule,MatFormFieldModule],
  templateUrl: './choice-input-field.component.html',
  styleUrl: './choice-input-field.component.css'
})
export class ChoiceInputFieldComponent {

  @Input() label: string = "label";
  @Input() options: string[] = ["Rural", "Urban"];
  @Input() defaultValue: string = "";
  @Input() optionsList: { value: string, name: string }[] = [];

  
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
