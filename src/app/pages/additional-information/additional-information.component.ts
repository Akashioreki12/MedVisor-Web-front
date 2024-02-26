import { Component, Input } from '@angular/core';
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



  @Input() historyOfTIAs: string = "";
  @Input() heredityOrGenetics: string = "";
  @Input() residentialArea: string = "Rural";
  @Input() smokingStatus: string = "Smoker";
  @Input() alcoholStatus: string = "True";
  @Input() workType: string = "Private Sector";




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

    this.optionsList1 = [
  { value: 'Rural', name: this.getContent('rural') },
  { value: 'Urban', name: this.getContent('urban') },
    ];
    this.optionsList2 = [
  { value: 'Fumeur', name: this.getContent('smoker') },
     { value: 'Ex-Fumeur', name: this.getContent('exSmoker') },
  {value:'Jamais fumé',name:this.getContent('neverSmoke')},
    ];
    
    this.optionsList3 = [
  { value: 'True', name: this.getContent('true') },
     { value: 'False', name: this.getContent('false') },
    ];
    
    this.optionsList4 = [
  { value: 'Secteur privé', name: this.getContent('privateSector') },
     { value: 'Secteur public', name: this.getContent('publicSector')},
          { value: 'Indeterminé', name: this.getContent('undetermined') },
               { value: 'Sans travail', name: this.getContent('jobless') },
     { value: 'Au foyer', name: this.getContent('home') },
      { value: 'Activité indépendante', name: this.getContent('independantActivity')},


   ];

    this.residenceTypeOptions = ["Rural","Urban"];
    this.smokingStatusOptions = ["Fumeur","Ex-Fumeur","Jamais fumé"];
    this.alcoholStatusOptions = ["True","False"];
    this.workTypeOptions = ["Secteur privé","Secteur public","Indeterminé","Sans travail","Au foyer","Activité indépendante"];
  }



  residenceTypeOptions: string[] = ["Rural","Urban"];
  smokingStatusOptions: string[] = ["Fumeur","Ex-Fumeur","Jamais fumé"];
  alcoholStatusOptions: string[] = ["True","False"];
  workTypeOptions: string[] = ["Secteur privé","Secteur public","Indeterminé","Sans travail","Au foyer","Activité indépendante"];

 
   optionsList1 = [
  { value: 'Rural', name: this.getContent('rural') },
  { value: 'Urban', name: this.getContent('urban') },
   ];
   optionsList2 = [
  { value: 'Fumeur', name: this.getContent('smoker') },
     { value: 'Ex-Fumeur', name: this.getContent('exSmoker') },
  {value:'Jamais fumé',name:this.getContent('neverSmoke')},
   ];
  
   optionsList3 = [
  { value: 'True', name: this.getContent('true') },
     { value: 'False', name: this.getContent('false') },
   ];
  
   optionsList4 = [
  { value: 'Secteur privé', name: this.getContent('privateSector') },
     { value: 'Secteur public', name: this.getContent('publicSector')},
          { value: 'Indeterminé', name: this.getContent('undetermined') },
               { value: 'Sans travail', name: this.getContent('jobless') },
     { value: 'Au foyer', name: this.getContent('home') },
      { value: 'Activité indépendante', name: this.getContent('independantActivity')},


   ];
  
  
  
  
  
  
  
  
  


  ngOnInit() {
    this.handleAlcoholStatus(this.alcoholStatus);
    this.handleResidentialArea(this.residentialArea);
    this.handleSmokingStatus(this.smokingStatus);
    this.handleWorkType(this.workType);
    this.handleHistoryOfTIAs(this.historyOfTIAs);
    this.handleHeredityOrGenetics(this.heredityOrGenetics);
    console.log(this.checkoutForm.value);
     this.languageService.getCurrentLanguageSubject().subscribe(language => {
      this.selectedLanguage = language;
    });
    this.toggleLanguage(this.selectedLanguage);
    this.optionsList1 = [
  { value: 'Rural', name: this.getContent('rural') },
  { value: 'Urban', name: this.getContent('urban') },
    ];
    this.optionsList2 = [
  { value: 'Fumeur', name: this.getContent('smoker') },
     { value: 'Ex-Fumeur', name: this.getContent('exSmoker') },
  {value:'Jamais fumé',name:this.getContent('neverSmoke')},
    ];
    
    this.optionsList3 = [
  { value: 'True', name: this.getContent('true') },
     { value: 'False', name: this.getContent('false') },
    ];
    
    this.optionsList4 = [
  { value: 'Secteur privé', name: this.getContent('privateSector') },
     { value: 'Secteur public', name: this.getContent('publicSector')},
          { value: 'Indeterminé', name: this.getContent('undetermined') },
               { value: 'Sans travail', name: this.getContent('jobless') },
     { value: 'Au foyer', name: this.getContent('home') },
      { value: 'Activité indépendante', name: this.getContent('independantActivity')},


   ];

    this.residenceTypeOptions = ["Rural","Urban"];
    this.smokingStatusOptions = ["Fumeur","Ex-Fumeur","Jamais fumé"];
    this.alcoholStatusOptions = ["True","False"];
    this.workTypeOptions =["Secteur privé","Secteur public","Indeterminé","Sans travail","Au foyer","Activité indépendante"];

    
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
