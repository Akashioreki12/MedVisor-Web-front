import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { BasicInformationComponent } from '../basic-information/basic-information.component';
import { AdditionalInformationComponent } from '../additional-information/additional-information.component';
import { HealthInformationComponent } from '../health-information/health-information.component';


@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [RouterModule, MatStepperModule, BasicInformationComponent, AdditionalInformationComponent, HealthInformationComponent],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css'
})
export class ModelFormComponent { 
  @ViewChild('stepper') stepper!: MatStepper;






  goBack() {
    if (this.stepper.selectedIndex > 0) {
      this.stepper.previous();
    }
  }

  goForward() {
    if (this.stepper.selectedIndex < this.stepper.steps.length - 1) {
      this.stepper.next();
    }
  }
}