import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpservice: HttpService) { }
  GetAllLabels() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Label', options);
  }
  CreateLabel(data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.POST('Label', data, options);
  }
  DeleteLabel(id) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.DELETE('Label/' + id, options);
  }
  EditLabel(data, id) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Label/' + id, data, options);
  }
}
