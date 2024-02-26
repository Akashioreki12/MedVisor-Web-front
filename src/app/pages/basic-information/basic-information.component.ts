import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../services/form/form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { TextInputFieldComponent } from '../../../assets/components/text-input-field/text-input-field.component';
import { RadioButtonChoiceComponent } from '../../../assets/components/radio-button-choice/radio-button-choice.component';
import { PhoneNumberFieldComponent } from '../../../assets/components/phone-number-field/phone-number-field.component';
import { ChoiceInputFieldComponent } from '../../../assets/components/choice-input-field/choice-input-field.component';
import { LanguageService } from '../../services/translation/language.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatSelectModule,MatFormFieldModule,RouterModule, ReactiveFormsModule, TextInputFieldComponent, RadioButtonChoiceComponent, PhoneNumberFieldComponent,ChoiceInputFieldComponent],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.css'
})
export class BasicInformationComponent {
  firstNameInputClicked: boolean = false;
  lastNameInputClicked: boolean = false;
  ageInputClicked: boolean = false;
  emailInputClicked: boolean = false;
  cinInputClicked: boolean = false;
  phoneNumberInputClicked: boolean = false;

   options: string[] = ["ar", "fr", "en"];

  selectedLanguage: string = "en";


  maritalStatusOptions:string [] = ["Yes","No"];





  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() cin: string = "";
  @Input() age: string = "";
  @Input() phoneNumber: string = "";
  @Input() countryCode: string = "";
  @Input() email: string = "";
  @Input() maritalStatus: string = "Yes";
  @Input() gender: string = "Male";


  formSubmitted = false;

  
  firstNameErrors: string[] = [];
  lastNameErrors: string[] = [];
  ageErrors: string[] = [];
  emailErrors: string[] = [];
  cinErrors: string[] = [];
  phoneNumberErrors : string[] = [];


  


  basicInformation: any = {};
  checkoutForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    lastName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    age: ['',[Validators.required,Validators.pattern(/^\d+$/),Validators.min(18),Validators.max(100)]],
    gender: ['', [Validators.required]],
    countryCode: ['', []],
    phoneNumber: ['', [Validators.required,Validators.pattern(/^[0-9]{9}$/)]],
    maritalStatus: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cin: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(8)]],
  }); 
  constructor(private languageService:LanguageService,private formDataService: FormDataService, private formBuilder: FormBuilder) { }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  toggleLanguage(language:string): void {
    this.languageService.toggleLanguage(language);
    this.maritalStatusOptions = ["Yes", "No"];
  }

  getContent(key: string): string {
    return this.languageService.getContent(key);
  }
onLanguageToggle(language: string): void {
  this.selectedLanguage = language;
      this.maritalStatusOptions = ["Yes", "No"];

}

  ngOnInit(): void {
    this.handleMaritalStatus(this.maritalStatus);
    console.log()
    if (this.gender == "") {
      this.gender = "Male";
    }
    this.languageService.getCurrentLanguageSubject().subscribe(language => {
      this.selectedLanguage = language;
    });
    this.toggleLanguage(this.selectedLanguage);
    this.maritalStatusOptions = ["Yes", "No"];

    this.checkoutForm.patchValue({
      firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
    gender: this.gender, 
    countryCode: this.countryCode,
    phoneNumber: this.phoneNumber,
    maritalStatus: this.maritalStatus, 
    email: this.email,
    cin: this.cin,
    })

    console.log(this.maritalStatus);
  }
  onNext() {
    this.clearErrors();
    this.clearClickedInputs();
    
    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      console.log('Form is valid', this.checkoutForm.value);
      return this.checkoutForm.value;

    }
    else {
      if (this.checkoutForm.get('firstName')?.invalid) {
        console.log('First Name is not valid.');
        console.log(this.checkoutForm.value.firstName);
        
        if (this.checkoutForm.get('firstName')?.hasError('required')) {
        this.firstNameErrors.push('First name is required');
      } if (this.checkoutForm.get('firstName')?.hasError('minlength')) {
        this.firstNameErrors.push('First name must be at least 2 characters long');
      } if (this.checkoutForm.get('firstName')?.hasError('maxlength')) {
        this.firstNameErrors.push('First name cannot exceed 50 characters');
      } if (this.checkoutForm.get('firstName')?.hasError('pattern')) {
        this.firstNameErrors.push('First name must only contain letters and spaces');
      } else {
        console.error('Invalid first name'); // This is a catch-all for any other potential errors
      }
    }

    if (this.checkoutForm.get('lastName')?.invalid) {
      console.log('Last Name is not valid.');
      if (this.checkoutForm.get('lastName')?.hasError('required')) {
        this.lastNameErrors.push('Last name is required');
      } if (this.checkoutForm.get('lastName')?.hasError('minlength')) {
        this.lastNameErrors.push('Last name must be at least 2 characters long');
      } if (this.checkoutForm.get('lastName')?.hasError('maxlength')) {
        this.lastNameErrors.push('Last name cannot exceed 50 characters');
      } if (this.checkoutForm.get('lastName')?.hasError('pattern')) {
        this.lastNameErrors.push('Last name must only contain letters and spaces');
      } else {
        console.error('Invalid first name'); // This is a catch-all for any other potential errors
      }
    }

    if (this.checkoutForm.get('age')?.invalid) {
      console.log('Age is not valid.');
      if (this.checkoutForm.get('age')?.hasError('required')) {
    this.ageErrors.push('Age is required');
  }
  if (this.checkoutForm.get('age')?.hasError('pattern')) {
    this.ageErrors.push('Age must be a number');
  }
  if (this.checkoutForm.get('age')?.hasError('min')) {
    this.ageErrors.push('Age must be 18 or older');
  }
  if (this.checkoutForm.get('age')?.hasError('max')) {
    this.ageErrors.push('Age must be 100 or younger');
  }
  else {
    console.error('Invalid age'); // This is a catch-all for any other potential errors
  }
    }

    if (this.checkoutForm.get('gender')?.invalid) {
      console.log('Gender is not valid.');
    }

    if (this.checkoutForm.get('countryCode')?.invalid) {
      console.log('Country Code is not valid.');
    }

    if (this.checkoutForm.get('phoneNumber')?.invalid) {
      console.log('Phone Number is not valid.');
      if (this.checkoutForm.get('phoneNumber')?.hasError('required')) {
    this.phoneNumberErrors.push('Phone number is required');
  } 
  if (this.checkoutForm.get('phoneNumber')?.hasError('pattern')) {
    this.phoneNumberErrors.push('Phone number must be 9 digits');
  } else {
    console.error('Invalid phone number'); // This is a catch-all for any other potential errors
  }
    }

    if (this.checkoutForm.get('maritalStatus')?.invalid) {
      console.log('Marital Status is not valid.');
    }

    if (this.checkoutForm.get('email')?.invalid) {
      console.log('Email is not valid.');
      if (this.checkoutForm.get('email')?.hasError('required')) {
    this.emailErrors.push('Email is required');
  } 
  if (this.checkoutForm.get('email')?.hasError('email')) {
    this.emailErrors.push('Please enter a valid email address');
  } else {
    console.error('Invalid email'); 
  }
    }

    if (this.checkoutForm.get('cin')?.invalid) {
      console.log('CIN is not valid.');

      if (this.checkoutForm.get('cin')?.hasError('required')) {
    this.cinErrors.push('CIN is required');
  } 
  if (this.checkoutForm.get('cin')?.hasError('minlength')) {
    this.cinErrors.push('CIN must be at least 8 characters long');
  } 
  if (this.checkoutForm.get('cin')?.hasError('maxlength')) {
    this.cinErrors.push('CIN cannot exceed 8 characters');
  } else {
    console.error('Invalid CIN'); 
  }
    }
      

    }
   

  }


  handleFirstName(value: any) {
    this.formSubmitted = false;
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
  
  onFirstNameInputClicked() {
    this.firstNameInputClicked = true; 
    this.firstNameErrors = [];
  }

  onLastNameInputClicked() {
    this.lastNameInputClicked = true; 
    this.lastNameErrors = [];
  }

  onAgeInputClicked() {
    this.ageInputClicked = true; 
    this.ageErrors = [];
  }
  onEmailInputClicked() {
    this.emailInputClicked = true; 
    this.emailErrors = [];
  }
  onCINInputClicked() {
    this.cinInputClicked = true; 
    this.cinErrors = [];
  }
  onPhoneNumberInputClicked() {
    this.phoneNumberInputClicked = true;
    this.phoneNumberErrors = [];
  }



  clearErrors() {
    this.firstNameErrors = [];
    this.lastNameErrors = [];
    this.ageErrors = [];
    this.emailErrors = [];
    this.cinErrors = [];
        this.phoneNumberErrors = [];

  }

  clearClickedInputs() {
      this.firstNameInputClicked = false;
  this.lastNameInputClicked = false;
  this.ageInputClicked = false;
  this.emailInputClicked = false;
    this.cinInputClicked = false;
    this.phoneNumberInputClicked = false;
    
  }


}
