// utilisateur-api.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../../gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurApiService {

  private apiUrl = 'http://localhost:8080/medicalimageprocessing/v1/users'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  save(utilisateursDto: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(`${this.apiUrl}/create`, utilisateursDto);
  }
}
