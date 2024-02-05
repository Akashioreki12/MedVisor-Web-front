import { Component, ViewChild } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { BasicInformationComponent } from '../basic-information/basic-information.component';
import { AdditionalInformationComponent } from '../additional-information/additional-information.component';
import { HealthInformationComponent } from '../health-information/health-information.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormDataService} from '../../form-data.service';
@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [RouterModule,
    MatStepperModule,
    BasicInformationComponent,
    AdditionalInformationComponent,
    HealthInformationComponent,
  CdkStepperModule,CommonModule],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css'
})
export class ModelFormComponent { 
  @ViewChild('stepper') stepper!: MatStepper;

  @ViewChild('basicInformationComponent') basicInformationComponent!: BasicInformationComponent;
  @ViewChild('healthInformationComponent') healthInformationComponent!: HealthInformationComponent;
  @ViewChild('additionalInformationComponent') additionalInformationComponent!: AdditionalInformationComponent;
    formData: any = {};

  constructor(private router: Router, private formDataService: FormDataService) {}

 onNext(): void {
    const activeStepIndex = this.stepper.selectedIndex;

    switch (activeStepIndex) {
      case 0:
        this.formData.basicInformation = this.basicInformationComponent.onNext();
        break;
      case 1:
        this.formData.healthInformation = this.healthInformationComponent.onNext();
        break;
      case 2:
        this.formData.additionalInformation = this.additionalInformationComponent.onNext();
        break;
    }

   if (activeStepIndex === this.stepper._steps.length - 1) {
      
      this.formData = {
        ...this.formData.basicInformation,
        ...this.formData.healthInformation,
        ...this.formData.additionalInformation
      };
      this.logFormData();
      console.log(this.formData);
      this.submitFormData();
    } else {
      // Move to the next step
      this.stepper.next();
    }
 }
  
  submitFormData(): void {
    this.formDataService.submitForm(this.formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        const resultPrediction = response.result;
        console.log(resultPrediction);
        this.router.navigate(['/page-result'], { queryParams: { result: resultPrediction } });
      },
      (error) => {
        console.error('Error submitting form:', error);
      }
    );
  }
logFormData(): void {
    console.log('Basic Information:', this.formData.basicInformation);
    console.log('Health Information:',  this.formData.healthInformation);
    console.log('Additional Information:', this.formData.additionalInformation);
  }
}