import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageLoginComponent } from "./pages/page-login/page-login.component";
import { PageSignupComponent } from "./pages/page-signup/page-signup.component";
import { PageResultComponent } from "./pages/page-result/page-result.component";
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../app/services/user/user.service';
import { UtilisateurApiService } from '../app/services/utilisateur-api.service';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { AuthenticationService } from '../gs-api/src/services/authentication.service';
import { Medicalimageprocessingv1usersService } from '../gs-api/src/services/medicalimageprocessingv-1users.service';




=======
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';
>>>>>>> 74c90cec07d3d42824bce697a28b61a40d50c068

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    providers: [UserService,AuthenticationService,UtilisateurApiService,ApplicationGuardService,Medicalimageprocessingv1usersService,],
    imports: [CommonModule, RouterOutlet, PageLoginComponent, PageSignupComponent, PageResultComponent , HttpClientModule,FormsModule]
=======
    imports: [CommonModule, RouterOutlet, PageLoginComponent, PageSignupComponent, PageResultComponent , BasicInformationComponent]
>>>>>>> 74c90cec07d3d42824bce697a28b61a40d50c068
})
export class AppComponent {
  title = 'Medvisor';
  
}
