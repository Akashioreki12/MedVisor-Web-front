import { Component, ViewChild } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { BasicInformationComponent } from '../basic-information/basic-information.component';
import { AdditionalInformationComponent } from '../additional-information/additional-information.component';
import { HealthInformationComponent } from '../health-information/health-information.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormDataService} from '../../services/form/form-data.service';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageService } from '../../services/translation/language.service';
import { ErrorModalComponent } from '../../error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule,MatInputModule,RouterModule,
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
  
  selectedPerson: any = {

    /* form1*/
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phoneNumber: '',
    countryCode:'+212',
    maritalStatus: 'Yes',
    email: '',
    cin: '',

     /* form2*/

    weight: '',
    height: '',
    bmi: '',
    totalCholesterol: '',
    ldlCholesterol: '',
    hdlCholesterol: '',
    glucoseLevel: '',
    heartDisease: 'Yes',
    diabetes : 'True',
    hypertension: 'Yes',


     /* form3*/

    historyOfTIAst: 'True',
    heredityOrGenetics: 'True',
    residentialArea: 'Rural',
    smokingStatus: 'Fumeur',
    alcoholStatus: 'True',
    workType : 'Secteur privé'
  };
  
  options1: string[] = ["ar", "fr", "en"];

  selectedLanguage: string = "en";

  constructor(private dialog:MatDialog,private languageService:LanguageService,private router: Router, private formDataService: FormDataService, private route: ActivatedRoute) { }
  



getContent(key: string): string {
    return this.languageService.getContent(key);
  }
  
openErrorModal() {
    const dialogRef = this.dialog.open(ErrorModalComponent, {
      data: {
        errorMessage: 'Something went wrong!'
      }
    });

    dialogRef.componentInstance.closeModalEvent.subscribe(() => {
      dialogRef.close(); // Close the modal when the event is emitted
    });
  }


  ngOnInit(): void {
  this.route.queryParams.subscribe((params) => {
    const selectedPersonString = params['selectedPerson'];

    if (selectedPersonString !== undefined) {
      this.selectedPerson = JSON.parse(selectedPersonString);
    } else {
    }
  });
  }
  
  toggleLanguage(language: string): void {
    this.additionalInformationComponent.toggleLanguage(language);
    this.basicInformationComponent.onLanguageToggle(language);
    
  }

  activateArabic(): void {
    this.toggleLanguage('ar');
    console.log(this.getContent('back'));
  }
  activateFrench(): void {
    this.toggleLanguage('fr');
  }
  activateEnglish(): void {
    this.toggleLanguage('en');
  }



 onNext(): void {
   const activeStepIndex = this.stepper.selectedIndex;
   let isValid = false;

    switch (activeStepIndex) {
      case 0:
        isValid = this.basicInformationComponent.checkoutForm.valid;
        this.formData.basicInformation = this.basicInformationComponent.onNext();
        break;
      case 1:
        isValid = this.healthInformationComponent.checkoutForm.valid;
        this.formData.healthInformation = this.healthInformationComponent.onNext();
        break;
      case 2:
        isValid = this.additionalInformationComponent.checkoutForm.valid;
        this.formData.additionalInformation = this.additionalInformationComponent.onNext();
        console.log(this.formData.additionalInformation);
        break;
    }

   if (isValid) {
    if (activeStepIndex === this.stepper._steps.length - 1) {
      this.formData = {
        ...this.formData.basicInformation,
        ...this.formData.healthInformation,
        ...this.formData.additionalInformation
      };
      console.log(this.formData);
      this.submitFormData();
    } else {
      this.stepper.next();
      console.log(this.formData);
    }
  }
 }
  
  onBack(): void {
    
    const activeStepIndex = this.stepper.selectedIndex;
    if (activeStepIndex === 0) {
      this.router.navigate(['/patient']);
    }
    else {
      this.stepper.previous();
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
        this.openErrorModal();
        console.error('Error submitting form:', error);
      }
    );
  }
}