import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio-button-choice',
  standalone: true,
  imports: [MatRadioModule,FormsModule],
  templateUrl: './radio-button-choice.component.html',
  styleUrl: './radio-button-choice.component.css'
})
export class RadioButtonChoiceComponent {
  @Input() label: string="label";
  @Input() option1: string = "option1";
  @Input() option2: string = "option2";
  @Input() value1: string = "value1";
  @Input() value2: string = "value2";
  @Input() defaultValue: string = "Male";
  

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    this.valueChange.emit(this.defaultValue);
  }

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
  }

  onUpdate() {
    this.valueChange.emit(this.defaultValue);

  }
  




}
