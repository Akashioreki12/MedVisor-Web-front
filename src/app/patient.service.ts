import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './pages/patient/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private http : HttpClient) { }

  private baseUrl = 'http://localhost:8080/patients';
  private baseurl = 'http://localhost:8080/medicalimageprocessing/v1/surveys';
  getAllPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getAllByCin(cin: string): Observable<any> {
    return this.http.get(`${this.baseurl}/allByCin/${cin}`);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }

  createPatient(patient: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
  searchPatients(searchTerm: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/search/${searchTerm}`);
  }

  searchPatientsByDate(date: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/searchByDate/${date}`);
  }


  getSurveyData(cin :string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/findByCin/${cin}`);
  }
  
  getPatientByCIN(cin: String): Observable<any> {
    return this.http.get(`${this.baseurl}/findByCin/${cin}`);
  }
  
}













