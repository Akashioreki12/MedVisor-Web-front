import { Component } from '@angular/core';
import { FormDataService} from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule,FormsModule, FormGroup, Validators} from '@angular/forms';
import { RadioButtonChoiceComponent } from '../radio-button-choice/radio-button-choice.component';
import { NumberInputFieldComponent } from '../number-input-field/number-input-field.component';
@Component({
  selector: 'app-health-information',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, RadioButtonChoiceComponent,NumberInputFieldComponent],
  templateUrl: './health-information.component.html',
  styleUrl: './health-information.component.css'
})
export class HealthInformationComponent {

  weightInputClicked: boolean = false;
  heightInputClicked: boolean = false;
  bmiInputClicked: boolean = false;

  totalCholesterolInputClicked: boolean = false;
  ldlCholesterolInputClicked: boolean = false;
  hdlCholesterolInputClicked: boolean = false;
  glucoseLevelInputClicked: boolean = false;

  bmiValeur: number = 0.00;
  weightValeur: number = 0.00;
  heightValeur: number = 0.00;
  totalCholesterol: number = 0.00;
  ldlCholesterol: number = 0.00;
  hdlCholesterol: number = 0.00;
  glucoseLevel: number = 0.00;


  weightErrors: string[] = [];
  heightErrors: string[] = [];
  bmiErrors: string[] = [];

  totalCholesterolErrors: string[] = [];
  ldlCholesterolErrors: string[] = [];
  hdlCholesterolErrors: string[] = [];
  glucoseLevelErrors: string[] = [];
  
    formSubmitted = false;


  checkoutForm: FormGroup = this.formBuilder.group({
    weight: ['', [Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    height: ['', [Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    bmi: ['', [Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    totalCholesterol: ['', [Validators.required]],
    ldlCholesterol: ['', [Validators.required]],
    hdlCholesterol: ['', [Validators.required]],
    glucoseLevel: ['', [Validators.required]],
    heartDisease: ['', [Validators.required]],
    diabetes: ['', [Validators.required]],
    hypertension: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder,private formDataService: FormDataService) { }
  

  onNext(): void {
    this.clearErrors();
    this.clearClickedInputs();    
    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      console.log('Form is valid', this.checkoutForm.value);
      return this.checkoutForm.value;
    }
    else {

        if (this.checkoutForm.get('weight')?.invalid) {
          console.log('Weight is not valid.');
          console.log(this.checkoutForm.value.weight);        
        if (this.checkoutForm.get('weight')?.hasError('required')) {
          this.weightErrors.push('Weight must be a valid number');
        } 
           if (this.checkoutForm.get('weight')?.hasError('pattern')) {
     this.heightErrors.push('Weight must be a valid decimal number');
   }
      else {
      console.error('Invalid weight');
}
      }
      
      
      if (this.checkoutForm.get('height')?.invalid) {
        console.log('Height is not valid.');
        
        if (this.checkoutForm.get('height')?.hasError('required')) {
    this.heightErrors.push('Height must be a valid number');
     } 
      if (this.checkoutForm.get('height')?.hasError('pattern')) {
    this.heightErrors.push('Height must be a valid decimal number');
     } else {
      console.error('Invalid height');
}
      }

 if (this.checkoutForm.get('bmi')?.invalid) {
          console.log(this.checkoutForm.value.weight);        
   if (this.checkoutForm.get('bmi')?.hasError('required')) {
     console.log(this.checkoutForm.value.bmi);
          this.bmiErrors.push('BMI must be a valid number');
        } 
   if (this.checkoutForm.get('bmi')?.hasError('pattern')) {
     this.bmiErrors.push('BMI must be a valid decimal number');
   }
      else {
      console.error('Invalid weight');
}
      }



       if (this.checkoutForm.get('totalCholesterol')?.invalid) {
        console.log('TotalCholesterol is not valid.');
        
        if (this.checkoutForm.get('totalCholesterol')?.hasError('required')) {
    this.totalCholesterolErrors.push('TotalCholesterol must be a valid number');
     } 
      if (this.checkoutForm.get('totalCholesterol')?.hasError('pattern')) {
    this.totalCholesterolErrors.push('TotalCholesterol must be a valid decimal number');
     } else {
      console.error('Invalid totalCholesterol');
}
       }
      
        if (this.checkoutForm.get('ldlCholesterol')?.invalid) {
        console.log('LdlCholesterol is not valid.');
        
        if (this.checkoutForm.get('ldlCholesterol')?.hasError('required')) {
    this.ldlCholesterolErrors.push('LdlCholesterol must be a valid number');
     } 
      if (this.checkoutForm.get('ldlCholesterol')?.hasError('pattern')) {
    this.ldlCholesterolErrors.push('LdlCholesterol must be a valid decimal number');
     } else {
      console.error('Invalid ldlCholesterol');
}
       }
      
       if (this.checkoutForm.get('hdlCholesterol')?.invalid) {
        console.log('hdlCholesterol is not valid.');
        
        if (this.checkoutForm.get('hdlCholesterol')?.hasError('required')) {
    this.hdlCholesterolErrors.push('HdlCholesterol must be a valid number');
     } 
      if (this.checkoutForm.get('hdlCholesterol')?.hasError('pattern')) {
    this.hdlCholesterolErrors.push('HdlCholesterol must be a valid decimal number');
     } else {
      console.error('Invalid hdlCholesterol');
}
       }
      
       if (this.checkoutForm.get('glucoseLevel')?.invalid) {
        console.log('GlucoseLevel is not valid.');
        
        if (this.checkoutForm.get('glucoseLevel')?.hasError('required')) {
    this.glucoseLevelErrors.push('glucoseLevel must be a valid number');
     } 
      if (this.checkoutForm.get('glucoseLevel')?.hasError('pattern')) {
    this.glucoseLevelErrors.push('GlucoseLevel must be a valid decimal number');
     } else {
      console.error('Invalid glucoseLevel');
}
       }
      
      





    }
  }


    handleWeight(value: any) {
   this.checkoutForm.patchValue({
    weight: value
   });
      
      this.weightValeur = value;
      
      this.updateBMI();
   
    }
    handleHeight(value: any) {
   this.checkoutForm.patchValue({
    height: value
   });
      
      this.heightValeur = value;
      
            this.updateBMI();

   
    }
    handleBMI(value: any) {
this.checkoutForm.patchValue({
    bmi: value
});
      this.heightValeur = 0;
      this.weightValeur = 0;
    }
  
  handleTotalCholesterol(value: any) {
   this.checkoutForm.patchValue({
    totalCholesterol: value
  });
   
}
  handleLDLCholesterol(value: any) {
   this.checkoutForm.patchValue({
    ldlCholesterol: value
  });
  
}
  handleHDLCholesterol(value: any) {    
    this.checkoutForm.patchValue({
    hdlCholesterol: value
  });
   
}

  handleGlucoseLevel(value: any) {
    
    this.checkoutForm.patchValue({
    glucoseLevel: value
  });
   
  }
  
   handleHeartDisease(value: any) {
     
     this.checkoutForm.patchValue({
    heartDisease: value
  });
   
   }
  
   handleDiabetes(value: any) {
     
     this.checkoutForm.patchValue({
    diabetes: value
  });
   
   }
  
   handleHypertension(value: any) {
          this.checkoutForm.patchValue({
    hypertension: value
  });
   }
  onWeightInputClicked() {
    this.weightInputClicked = true; 
    this.weightErrors = [];
  }

  onHeightInputClicked() {
    this.heightInputClicked = true; 
    this.heightErrors = [];
  }
   onBmiInputClicked() {
    this.bmiInputClicked = true; 
    this.bmiErrors = [];
  }
   onTotalCholesterolInputClicked() {
    this.totalCholesterolInputClicked = true; 
    this.totalCholesterolErrors = [];
   }
   onLdlCholesterolInputClicked() {
    this.ldlCholesterolInputClicked = true; 
    this.ldlCholesterolErrors = [];
   }
   onHdlCholesterolInputClicked() {
    this.hdlCholesterolInputClicked = true; 
    this.hdlCholesterolErrors = [];
   }
   onGlucoseLevelInputClicked() {
    this.glucoseLevelInputClicked = true; 
    this.glucoseLevelErrors = [];
  }
  clearErrors() {
    this.weightErrors = [];
    this.heightErrors = [];
    this.bmiErrors = [];
    this.totalCholesterolErrors = [];
    this.ldlCholesterolErrors = [];
    this.hdlCholesterolErrors = [];
    this.glucoseLevelErrors = [];

  }

  clearClickedInputs() {
    this.weightInputClicked = false;
    this.heightInputClicked = false;
    this.bmiInputClicked = false;
    this.totalCholesterolInputClicked = false; 
    this.ldlCholesterolInputClicked = false;
    this.hdlCholesterolInputClicked = false; 
    this.glucoseLevelInputClicked = false; 
  }


  updateBMI() {
    const weightValue = this.checkoutForm.value.weight;
    const heightValue = this.checkoutForm.value.height;
    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue !== 0) {
      const bmiValue = weightValue / (heightValue * heightValue);
      this.checkoutForm.patchValue({ bmi: bmiValue.toFixed(2) });
      this.bmiValeur = parseFloat(bmiValue.toFixed(2));
    } else {
      this.checkoutForm.patchValue({ bmi: '' });
    }
  }


}
