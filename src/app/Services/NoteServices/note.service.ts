import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpservice: HttpService) { }
  GetAllNotes() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes', options);
  }
  GetAllPinned() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes/AllPin', options);
  }
  CreateNote(data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.POST('Notes', data, options);
  }
  GetAllArchive() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes/AllArchive', options);
  }
  GetAllReminder() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes/reminder', options);
  }
  GetAllTrash() {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes/AllTrash', options);
  }
  ArchiveNote(id, data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/Archived', data, options);
  }
  MoveToTrash(id, data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/trash', data, options);
  }
  UpdateNote(id, data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id, data, options);
  }
  ChangeColor(id, data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/color', data, options);
  }
  AddImageToNote(id, data) {
    console.log("inservice0", data);

    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        // 'Content-Type': 'multipart/form-file'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/Imageupload', data, options);
  }
  GetAllUsers(data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET(`Notes/users?keyword=` + data, options)
  }
  SearchNotes(data) {
    var token = localStorage.getItem("token");
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.GET('Notes?keyword=' + data, options)
  }
  AddCollaboration(id, data) {

    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/collaborate', data, options);
  }
  AddLabelToNote(data, noteId) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + noteId, data, options);
  }
  PinNote(id, data) {

    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + id + '/Pinned', data, options);

  }
  RemoveLabel(noteId, labelId) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.DELETE('Notes/' + noteId + '/removeLabel/' + labelId, options);
  }
  AddReminder(noteId, data) {
    var token = localStorage.getItem("token")
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.PUT('Notes/' + noteId, data, options);
  }
}
