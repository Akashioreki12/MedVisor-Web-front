import { Component } from '@angular/core';
import { ProfileComponent } from "../../../assets/Svgs/profile/profile.component";
import { HomeComponent } from "../../../assets/Svgs/home/home.component";
import { ProgressBarComponent } from "../../../assets/components/progress-bar/progress-bar.component";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/translation/language.service';;

@Component({
    selector: 'app-page-result',
    standalone: true,
    templateUrl: './page-result.component.html',
    styleUrl: './page-result.component.css',
    imports: [ProfileComponent, HomeComponent, ProgressBarComponent]
})
export class PageResultComponent{

      options: string[] = ["ar", "fr", "en"];
  selectedLanguage: string = this.getContent('language');
    resultPrediction: number = 0;


    constructor(private router: Router,private route: ActivatedRoute,private languageService: LanguageService) { }
    

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
    });
    this.toggleLanguage(this.selectedLanguage);
    this.route.queryParams.subscribe((params) => {
        this.resultPrediction = +params['result'];
        
        console.log(this.resultPrediction);
    });
    }
    
    refaire(): void {

        this.router.navigate(['/patient']);
        
    }
}
