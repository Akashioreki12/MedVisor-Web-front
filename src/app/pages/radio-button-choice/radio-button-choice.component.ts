import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button-choice',
  standalone: true,
  imports: [],
  templateUrl: './radio-button-choice.component.html',
  styleUrl: './radio-button-choice.component.css'
})
export class RadioButtonChoiceComponent {
  @Input() label: string="label";
  @Input() option1: string = "option1";
  @Input() option2: string ="option2";


}
