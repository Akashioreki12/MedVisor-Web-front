import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageLoginComponent } from "./pages/page-login/page-login.component";
import { PageSignupComponent } from "./pages/page-signup/page-signup.component";
import { PageResultComponent } from "./pages/page-result/page-result.component";
import { BasicInformationComponent } from './pages/basic-information/basic-information.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PageLoginComponent, PageSignupComponent, PageResultComponent , BasicInformationComponent]
})
export class AppComponent {
  title = 'Medvisor';
  
}
