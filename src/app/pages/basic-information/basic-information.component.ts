import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { TextInputFieldComponent } from '../text-input-field/text-input-field.component';
import { RadioButtonChoiceComponent } from '../radio-button-choice/radio-button-choice.component';
import { PhoneNumberFieldComponent } from '../phone-number-field/phone-number-field.component';
import { ChoiceInputFieldComponent } from '../choice-input-field/choice-input-field.component';
@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TextInputFieldComponent, RadioButtonChoiceComponent, PhoneNumberFieldComponent,ChoiceInputFieldComponent],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  basicInformation: any = {};
  checkoutForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    countryCode: ['+212', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cin: ['', [Validators.required]],
  }); 
  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  onNext() {
    return this.checkoutForm.value;
  }


 handleFirstName(value: any) {
   this.checkoutForm.value.firstName = value;
   
 }
  
  handleLastName(value: any) {
   this.checkoutForm.value.lastName = value;
   
  }
    handleEmail(value: any) {
   this.checkoutForm.value.email = value;
   
    }
    handleCIN(value: any) {
   this.checkoutForm.value.cin = value;
   
    }
  
  handleAge(value: any) {
   this.checkoutForm.value.age = value;
   
  }
  
    handleMaritalStatus(value: any) {
   this.checkoutForm.value.maritalStatus = value;
   
}
   handleNumber(value: any) {
   this.checkoutForm.value.phoneNumber = value;
   
   }
  
   handleGender(value: any) {
   this.checkoutForm.value.gender = value;
   
}

}
