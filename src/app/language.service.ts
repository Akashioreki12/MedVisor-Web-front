import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage: string = 'fr';
  private languageData: any;

  constructor(private http: HttpClient) {
    this.fetchLanguageData();
  }

  private fetchLanguageData(): void {
    this.http.get('./assets/languages/form2.json').pipe(
      tap(data => this.languageData = data),
      catchError(error => {
        console.error('Error fetching language data:', error);
        return throwError('Error fetching language data');
      })
    ).subscribe();
  ;

  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

 toggleLanguage(language: string): void {
    if (this.languageData && this.languageData[language]) {
        this.currentLanguage = language;
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
