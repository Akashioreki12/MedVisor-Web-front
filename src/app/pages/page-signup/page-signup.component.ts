import { Component, OnInit } from '@angular/core';
import { SvgLoginComponent } from "../../../assets/Svgs/svg-login/svg-login.component";
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../../services/translation/language.service';



@Component({
  selector: 'app-page-signup',
  standalone: true,
  imports: [SvgLoginComponent , FormsModule],
  templateUrl: './page-signup.component.html',
  styleUrl: './page-signup.component.css'
})
export class PageSignupComponent implements OnInit{
options: string[] = ["ar", "fr", "en"];
  selectedLanguage: string = this.getContent('language');

authenticationRequest: AuthenticationRequest ={};
errorMessage = '';

constructor(
  private userService: UserService,
  private router: Router,
  private languageService: LanguageService
){

}

getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  toggleLanguage(language:string): void {
    this.languageService.toggleLanguage(language);
  }

  getContent(key: string): string {
    return this.languageService.getContent(key);
  }



ngOnInit(): void {
  this.languageService.getCurrentLanguageSubject().subscribe(language => {
      this.selectedLanguage = language;
      // Update other properties or perform language-related logic here
    });
    this.toggleLanguage(this.selectedLanguage);
  
}
login() {

    console.log('login value:', this.authenticationRequest.login);
    console.log('Password value:', this.authenticationRequest.password);
    this.userService.login(this.authenticationRequest).subscribe(data => {
      this.userService.setConnectedUser(data);
      //this.router.navigate(['dashboard']);
      window.location.href = '/ai';
    }, error => {
      this.errorMessage = error.error.message;
    });;
  }

  navigateToLoginPage(): void {
    this.router.navigate(['/page-login']);
  }

  loadInscrirePage() {
    window.location.href = '/page-login';
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
}
