import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageResultComponent } from './pages/page-result/page-result.component';
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';
import { HealthInformationComponent } from './pages/health-information/health-information.component';
import { AdditionalInformationComponent } from './pages/additional-information/additional-information.component';
import { ModelFormComponent } from './pages/model-form/model-form.component';
import { TextInputFieldComponent } from './pages/text-input-field/text-input-field.component';
import { RadioButtonChoiceComponent } from './pages/radio-button-choice/radio-button-choice.component';


export const routes: Routes = [
    
    { path: 'page-login', component: PageLoginComponent },
    { path: 'page-signup', component: PageSignupComponent },
    { path: 'page-result', component: PageResultComponent },
    { path: 'form', component: BasicInformationComponent },
    { path: 'form2', component: HealthInformationComponent },
    { path: 'form3', component: AdditionalInformationComponent },
    { path: 'ai', component: ModelFormComponent },
    { path: 'input', component: TextInputFieldComponent },
    {path: 'radio', component:RadioButtonChoiceComponent},



];
