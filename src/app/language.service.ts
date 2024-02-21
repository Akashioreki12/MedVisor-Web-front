import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage: string = 'en';
  private languageData: any;
  private languageSubject = new BehaviorSubject<string>(this.currentLanguage);

  constructor(private http: HttpClient) {
    this.fetchLanguageData();
  }

  private fetchLanguageData(): void {
    this.http.get('./assets/languages/form.json').subscribe(
      data => {
        this.languageData = data;
        this.languageSubject.next(this.currentLanguage);
      },
      error => {
        console.error('Error fetching language data:', error);
      }
    );
  }

  getCurrentLanguageSubject(): BehaviorSubject<string> {
    return this.languageSubject;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

 toggleLanguage(language: string): void {
    if (this.languageData && this.languageData[language]) {
      this.currentLanguage = language;
      this.languageSubject.next(this.currentLanguage);
    }
}

  getContent(key: string): string {
    if (this.languageData && this.languageData[this.currentLanguage]) {
      return this.languageData[this.currentLanguage][key] || '';
    } else {
      return '';
    }
  }
 

}
