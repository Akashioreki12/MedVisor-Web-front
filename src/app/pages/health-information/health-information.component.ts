import { Component } from '@angular/core';
import { FormDataService} from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { RadioButtonChoiceComponent } from '../radio-button-choice/radio-button-choice.component';
import { NumberInputFieldComponent } from '../number-input-field/number-input-field.component';
@Component({
  selector: 'app-health-information',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonChoiceComponent,NumberInputFieldComponent],
  templateUrl: './health-information.component.html',
  styleUrl: './health-information.component.css'
})
export class HealthInformationComponent {

  checkoutForm: FormGroup = this.formBuilder.group({
    // ... existing basic information fields
    weight: ['', [Validators.required]],
    height: ['', [Validators.required]],
    bmi: ['', [Validators.required]],
    totalCholesterol: ['', [Validators.required]],
    ldlCholesterol: ['', [Validators.required]],
    hdlCholesterol: ['', [Validators.required]],
    glucoseLevel: ['', [Validators.required]],
    heartDisease: ['', [Validators.required]],
    diabetes: ['', [Validators.required]],
    hypertension: ['', [Validators.required]],
  });

  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  
  onNext(): void {
    return this.checkoutForm.value;
  }


    handleWeight(value: any) {
   this.checkoutForm.value.weight = value;
   
    }
    handleHeight(value: any) {
   this.checkoutForm.value.height = value;
   
    }
    handleBMI(value: any) {
   this.checkoutForm.value.bmi = value;
   
    }
  
  handleTotalCholesterol(value: any) {
   this.checkoutForm.value.totalCholesterol = value;
   
}

  handleLDLCholesterol(value: any) {
   this.checkoutForm.value.ldlCholesterol = value;
   
}

  handleHDLCholesterol(value: any) {
   this.checkoutForm.value.hdlCholesterol = value;
   
}

  handleGlucoseLevel(value: any) {
   this.checkoutForm.value.glucoseLevel = value;
   
}


}
