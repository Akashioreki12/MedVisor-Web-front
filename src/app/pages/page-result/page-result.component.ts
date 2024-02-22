import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from "../../../assets/Svgs/profile/profile.component";
import { HomeComponent } from "../../../assets/Svgs/home/home.component";
import { ProgressBarComponent } from "../../../assets/components/progress-bar/progress-bar.component";
import { ActivatedRoute } from '@angular/router';
import { RouterModule,Router } from '@angular/router';
import { LanguageService } from '../../language.service';

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
      // Update other properties or perform language-related logic here
    });
    this.toggleLanguage(this.selectedLanguage);
    // Retrieve the 'result' query parameter from the route
    this.route.queryParams.subscribe((params) => {
        this.resultPrediction = +params['result']; // Convert to number if needed
        
        console.log(this.resultPrediction);
    });
    }
    
    refaire(): void {

        this.router.navigate(['/ai']);
        
    }
}
