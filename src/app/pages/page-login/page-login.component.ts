import { Component } from '@angular/core';
import { SvgLoginComponent } from "../../../assets/Svgs/svg-login/svg-login.component";
import { UserDto } from '../../../gs-api/src/models';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/translation/language.service';
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './page-login.component.html',
    styleUrl: './page-login.component.css',
    imports: [SvgLoginComponent ,FormsModule,HttpClientModule ,CommonModule ]
})
export class PageLoginComponent {
  utilisateursDto: UserDto = {};
  errorMsg: Array<string> = [];
  options: string[] = ["ar", "fr", "en"];
  selectedLanguage: string = this.getContent('language');
  formSubmitted: boolean = false;
    

  constructor(
    private utilisateurService: UserService,
    private router: Router ,
    private languageService: LanguageService

  ) {}

  isFormValid(): boolean {
    return !!this.utilisateursDto.name && !!this.utilisateursDto.prenom &&
      !!this.utilisateursDto.numero && !!this.utilisateursDto.username &&
      !!this.utilisateursDto.password;
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

  
  sinscrire() {
    this.formSubmitted = true;
    if (this.isFormValid()) {
      this.utilisateurService.sInscrire(this.utilisateursDto).subscribe(utilisateursDto => {
        window.location.href = '/page-signup';
      }, error => {
        this.errorMsg = error.error.errors;
      });
    }
  }

  navigateToSignPage(): void {
    this.router.navigate(['/page-signup']);
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
