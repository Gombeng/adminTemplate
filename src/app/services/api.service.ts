import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverUrl: any = 'http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(public http: HttpClient) {}

  get(url) {
    this.getToken();
    return this.http.get(this.serverUrl + url, this.httpOptions);
  }
  post(url, data) {
    this.getToken();
    return this.http.post(this.serverUrl + url, data, this.httpOptions);
  }
  put(url, data) {
    this.getToken();
    return this.http.put(this.serverUrl + url, data, this.httpOptions);
  }
  delete(url) {
    this.getToken();
    return this.http.delete(this.serverUrl + url, this.httpOptions);
  }

  httpOptions: any;
  getToken() {
    var tokenKey = localStorage.getItem('appToken');
    if (tokenKey != null) {
      var tkn = JSON.parse(tokenKey);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tkn.token,
        }),
      };
    }
  }
  register(email, password) {
    return this.http.post(this.serverUrl + 'auth/register', {
      email: email,
      password: password,
    });
  }
  login(email, password) {
    return this.http.post(this.serverUrl + 'auth/login', {
      email: email,
      password: password,
    });
  }
}
