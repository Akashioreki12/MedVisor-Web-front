import { Component, Input } from '@angular/core';
/*import { NgCircleProgressModule } from 'ng-circle-progress';*/
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progressValue: number = 50;


  calculateDashOffset(progressValue:number) {
    return `${(100 - progressValue) / 100 * 722.2}px`;
}

  calculateDashArray(totalCircumference:number, progressValue:number) {
    return `${(progressValue / 100) * totalCircumference}px`;
}

}

