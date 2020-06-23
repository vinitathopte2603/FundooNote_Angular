import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }
  Login(data) {
    var token = ''
    return this.httpservice.POST('/Accounts/Login', data, token)
  }
  Registration(data) {
    var token = ''
    return this.httpservice.POST('/Accounts/registration', data, token)
  }
  ForgotPassword(data) {
    var token = ''
    return this.httpservice.POST('/Accounts/ForgotPassword', data, token)
  }
  ResetPassword(data: any, token) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.POST('Accounts/ResetPassword', data, options);
  }
  ProfilePicture(data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpservice.PUT('Accounts/profilepicture', data, options);
  }
}
