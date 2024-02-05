import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { RadioButtonChoiceComponent } from '../radio-button-choice/radio-button-choice.component';
import { ChoiceInputFieldComponent } from '../choice-input-field/choice-input-field.component';
@Component({
  selector: 'app-additional-information',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, RadioButtonChoiceComponent, ChoiceInputFieldComponent],
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.css'
})
export class AdditionalInformationComponent {
   checkoutForm: FormGroup = this.formBuilder.group({
    historyOfTIAs: ['', [Validators.required]],
    heredityOrGenetics: ['', [Validators.required]],
    residentialArea: ['', [Validators.required]],
    smokingStatus: ['', [Validators.required]],
    alcoholStatus: ['', [Validators.required]],
    workType: ['', [Validators.required]],
  });
  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
 onNext(): void {
    return this.checkoutForm.value;
  }
  handleResidentialArea(value: any) {
   this.checkoutForm.value.residentialArea = value;
   
  }
  handleSmokingStatus(value: any) {
   this.checkoutForm.value.smokingStatus = value;
   
  }
  handleAlcoholStatus(value: any) {
   this.checkoutForm.value.alcoholStatus = value;
   
  }
  handleWorkType(value: any) {
   this.checkoutForm.value.workType = value;
   
  }
  

   handleHistoryOfTIAs(value: any) {
   this.checkoutForm.value.historyOfTIAs = value;
   
   }
  
   handleHeredityOrGenetics(value: any) {
   this.checkoutForm.value.heredityOrGenetics = value;
   
}
}
