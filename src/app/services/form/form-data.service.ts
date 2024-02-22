import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private springUrl = 'http://localhost:8080/medicalimageprocessing/v1/surveys/create';
  constructor(private http: HttpClient) {}
  submitForm(form: any): Observable<any> {
    const url = `${this.springUrl}`;
    return this.http.post(url,form)
  }
}
