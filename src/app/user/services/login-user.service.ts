import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from 'user/models';

@Injectable()
export class LoginUserService {

  private urlApi = '';

  constructor(private http: HttpClient) {}


  public post(data: user) {
    return this.http.post(`${this.urlApi}`,data);
  }
}
