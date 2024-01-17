import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDto } from '../../../gs-api/src/models';
import { AuthenticationService } from '../../../gs-api/src/services/authentication.service';
import { UtilisateurApiService } from '../utilisateur-api.service';
import { AuthenticationRequest } from '../../../gs-api/src/models/authentication-request';
import { AuthenticationResponse } from '../../../gs-api/src/models/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurApiService: UtilisateurApiService,
    private router: Router
  ) { }

  // Registration
  sInscrire(utilisateurDto: UserDto): Observable<UserDto> {
    return this.utilisateurApiService.save(utilisateurDto);
  }

  // Login
  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  // Set Connected User
  setConnectedUser(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('connectedUser', JSON.stringify(authenticationResponse));
  }

  // Check if the user is logged in and the access token is valid
  isUserLoggedAndAccessTokenValid(): boolean {
    const connectedUserString = localStorage.getItem('connectedUser');
    console.log('connectedUserString:', connectedUserString);
    
    if (connectedUserString) {
      const connectedUser = JSON.parse(connectedUserString);
      const accessToken = connectedUser.accessToken;
  
      console.log('Access Token:', accessToken);
  
      // TODO: Verify if the access token is valid
  
      return true;
    } else {
      this.router.navigate(['page-signup']);
      return false;
    }
  }
}
