import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageResultComponent } from './pages/page-result/page-result.component';
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';
import { HealthInformationComponent } from './pages/health-information/health-information.component';

export const routes: Routes = [
    { path: 'page-login', component: PageLoginComponent },
    { path: 'page-signup', component: PageSignupComponent },
    { path: 'page-result', component: PageResultComponent },
    { path: 'form', component: BasicInformationComponent },
    { path: 'form2', component: HealthInformationComponent },

];
