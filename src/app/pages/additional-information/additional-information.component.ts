import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../../services/form/form-data.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { RadioButtonChoiceComponent } from '../../../assets/components/radio-button-choice/radio-button-choice.component';
import { ChoiceInputFieldComponent } from '../../../assets/components/choice-input-field/choice-input-field.component';
import { LanguageService } from '../../services/translation/language.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additional-information',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,MatInputModule,RouterModule, ReactiveFormsModule, RadioButtonChoiceComponent, ChoiceInputFieldComponent],
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
  
  options1: string[] = ["ar", "fr", "en"];

    getContent(key: string): string {
    return this.languageService.getContent(key);
  }

  selectedLanguage: string = 'en';
  
  
  constructor(private languageService: LanguageService, private formDataService: FormDataService, private formBuilder: FormBuilder) { }
  
   getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  toggleLanguage(language:string): void {
    this.languageService.toggleLanguage(language);
    this.selectedLanguage = this.getContent('language');
    this.residenceTypeOptions = [this.getContent('rural'), this.getContent('urban')];
    this.smokingStatusOptions = [this.getContent('smoker'),this.getContent('neverSmoke'),this.getContent('exSmoker')];
    this.alcoholStatusOptions = [this.getContent('true'),this.getContent('false')];
    this.workTypeOptions = [this.getContent('privateSector'),this.getContent('publicSector'),this.getContent('home'),this.getContent('undetermined'),this.getContent('jobless'),this.getContent('independantActivity')];
  }



  residenceTypeOptions: string[] = [];
  smokingStatusOptions: string[] = [];
  alcoholStatusOptions: string[] = [];
  workTypeOptions: string[] = [];

 


  ngOnInit() {
     this.languageService.getCurrentLanguageSubject().subscribe(language => {
      this.selectedLanguage = language;
      // Update other properties or perform language-related logic here
    });
    this.toggleLanguage(this.selectedLanguage);
    this.residenceTypeOptions = [this.getContent('rural'), this.getContent('urban')];
    this.smokingStatusOptions = [this.getContent('smoker'),this.getContent('neverSmoke'),this.getContent('exSmoker')];
    this.alcoholStatusOptions = [this.getContent('true'),this.getContent('false')];
    this.workTypeOptions = [this.getContent('privateSector'),this.getContent('publicSector'),this.getContent('home'),this.getContent('undetermined'),this.getContent('jobless'),this.getContent('independantActivity')];
    
  }



  onNext(): void {
   
    if (this.checkoutForm.valid) {
      console.log('Form is valid', this.checkoutForm.value);
      return this.checkoutForm.value;

    }
  }
  handleResidentialArea(value: any) {
     this.checkoutForm.patchValue({
    residentialArea: value
  });
   
  }
  handleSmokingStatus(value: any) {
     this.checkoutForm.patchValue({
    smokingStatus: value
  });
   
  }
  handleAlcoholStatus(value: any) {
    this.checkoutForm.patchValue({
    alcoholStatus: value
  });
  }
  handleWorkType(value: any) {
    this.checkoutForm.patchValue({
    workType: value
  });
  }
  

   handleHistoryOfTIAs(value: any) {
    this.checkoutForm.patchValue({
    historyOfTIAs: value
  });
   }
  
   handleHeredityOrGenetics(value: any) {
    this.checkoutForm.patchValue({
    heredityOrGenetics: value
  });
}
}
