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

  getAllPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
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
  
}













