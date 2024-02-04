import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-number-input-field',
  standalone: true,
  imports: [],
  templateUrl: './number-input-field.component.html',
  styleUrl: './number-input-field.component.css'
})
export class NumberInputFieldComponent {

  @Input() label: string = "label";

}
