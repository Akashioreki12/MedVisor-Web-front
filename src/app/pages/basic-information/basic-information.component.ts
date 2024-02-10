import { Component, Input } from '@angular/core';
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


  @Input() firstName: string = "Enter your first name";
  @Input() lastName: string = "Enter your last name";
  @Input() cin: string = " enter your cin";
  @Input() age: string = "enter your age";
  @Input() phoneNumber: string = " enter your phone number";


  


  basicInformation: any = {};
  checkoutForm: FormGroup = this.formBuilder.group({
    firstName: ['Mohammed Yassine7', [Validators.required]],
    lastName: ['KIAL', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    countryCode: ['+212', [Validators.required]],
    phoneNumber: ['639453059', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    email: ['yassine@gmail.com', [Validators.required, Validators.email]],
    cin: ['HH31038', [Validators.required]],
  }); 
  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm.setValue({

      firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
    gender: '', // Set default values for other controls if needed
    countryCode: '+212',
    phoneNumber: this.phoneNumber,
    maritalStatus: '', // Set default values for other controls if needed
    email: 'yassine@gmail.com',
    cin: this.cin,


      
    })
    



  }
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
