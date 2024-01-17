import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData: any = { };

  constructor() { }

  setBasicInformation(data: any): void {
    this.formData.basicInformation = data;
  }

  getBasicInformation(): any {
    return this.formData.basicInformation;
  }

  setHealthInformation(data: any): void {
    this.formData.healthInformation = data;
  }

  getHealthInformation(): any {
    return this.formData.healthInformation;
  }

  setAdditionalInformation(data: any): void {
    this.formData.additionalInformation = data;
  }

  getAdditionalInformation(): any {
    return this.formData.additionalInformation;
  }
}
