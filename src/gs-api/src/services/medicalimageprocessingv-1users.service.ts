/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
@Injectable({
  providedIn: 'root',
})
class Medicalimageprocessingv1usersService extends __BaseService {
  static readonly findAllPath = '/medicalimageprocessing/v1/users/all';
  static readonly findByUsernamePath = '/medicalimageprocessing/v1/users/byusername/{userName}';
  static readonly savePath = '/medicalimageprocessing/v1/users/create';
  static readonly deletePath = '/medicalimageprocessing/v1/users/delete/{idUser}';
  static readonly findByIdPath = '/medicalimageprocessing/v1/users/{idUser}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This method allow to send the list of users in the BDD
   * @return List of users / void list
   */
  findAllResponse(): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/medicalimageprocessing/v1/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * This method allow to send the list of users in the BDD
   * @return List of users / void list
   */
  findAll(): __Observable<UserDto> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * This method allow to find a user by its username
   * @param userName undefined
   * @return User found in database
   */
  findByUsernameResponse(userName: string): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/medicalimageprocessing/v1/users/byusername/${userName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * This method allow to find a user by its username
   * @param userName undefined
   * @return User found in database
   */
  findByUsername(userName: string): __Observable<UserDto> {
    return this.findByUsernameResponse(userName).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * This method allow to create or edit a user
   * @param body undefined
   * @return User object Created/Edited
   */
  saveResponse(body?: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/medicalimageprocessing/v1/users/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * This method allow to create or edit a user
   * @param body undefined
   * @return User object Created/Edited
   */
  save(body?: UserDto): __Observable<UserDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * This method allow to delete a user by its ID
   * @param idUser undefined
   * @return User deleted successfully
   */
  deleteResponse(idUser: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/medicalimageprocessing/v1/users/delete/${idUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * This method allow to delete a user by its ID
   * @param idUser undefined
   * @return User deleted successfully
   */
  delete(idUser: number): __Observable<UserDto> {
    return this.deleteResponse(idUser).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * This method allow to find a user by its ID
   * @param idUser undefined
   * @return User found in database
   */
  findByIdResponse(idUser: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/medicalimageprocessing/v1/users/${idUser}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * This method allow to find a user by its ID
   * @param idUser undefined
   * @return User found in database
   */
  findById(idUser: number): __Observable<UserDto> {
    return this.findByIdResponse(idUser).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module Medicalimageprocessingv1usersService {
}

export { Medicalimageprocessingv1usersService }
