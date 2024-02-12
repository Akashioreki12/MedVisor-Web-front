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


  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() cin: string = "";
  @Input() age: string = "";
  @Input() phoneNumber: string = "";


  


  basicInformation: any = {};
  checkoutForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    lastName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    age: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
    gender: ['', [Validators.required]],
    countryCode: ['', []],
    phoneNumber: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cin: ['', [Validators.required]],
  }); 
  constructor(private formDataService: FormDataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm.patchValue({
      firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
    gender: '', 
    countryCode: '',
    phoneNumber: this.phoneNumber,
    maritalStatus: '', 
    email: '',
    cin: this.cin,
    })
  }
  onNext() {
    if (this.checkoutForm.valid) {
      console.log('Form is valid', this.checkoutForm.value);
      return this.checkoutForm.value;

    }
    else {
      if (this.checkoutForm.get('firstName')?.invalid) {
      console.log('First Name is not valid.');
    }

    if (this.checkoutForm.get('lastName')?.invalid) {
      console.log('Last Name is not valid.');
    }

    if (this.checkoutForm.get('age')?.invalid) {
      console.log('Age is not valid.');
    }

    if (this.checkoutForm.get('gender')?.invalid) {
      console.log('Gender is not valid.');
    }

    if (this.checkoutForm.get('countryCode')?.invalid) {
      console.log('Country Code is not valid.');
    }

    if (this.checkoutForm.get('phoneNumber')?.invalid) {
      console.log('Phone Number is not valid.');
    }

    if (this.checkoutForm.get('maritalStatus')?.invalid) {
      console.log('Marital Status is not valid.');
    }

    if (this.checkoutForm.get('email')?.invalid) {
      console.log('Email is not valid.');
    }

    if (this.checkoutForm.get('cin')?.invalid) {
      console.log('CIN is not valid.');
    }
      

    }

    console.log(this.checkoutForm.value);

  }


handleFirstName(value: any) {
  this.checkoutForm.patchValue({
    firstName: value
  });
}
  
 handleLastName(value: any) {
  this.checkoutForm.patchValue({
    lastName: value
  });
}
    handleEmail(value: any) {
  this.checkoutForm.patchValue({
    email: value
  });
}

handleCIN(value: any) {
  this.checkoutForm.patchValue({
    cin: value
  });
}

handleAge(value: any) {
  this.checkoutForm.patchValue({
    age: value
  });
}

handleMaritalStatus(value: any) {
  this.checkoutForm.patchValue({
    maritalStatus: value
  });
}

handleNumber(value: any) {
  this.checkoutForm.patchValue({
    phoneNumber: value
  });
}
  
  handleCountryCode(value: any) {
    this.checkoutForm.patchValue({
      countryCode: value
    })
  }
handleGender(value: any) {
  this.checkoutForm.patchValue({
    gender: value
  });
}


}
