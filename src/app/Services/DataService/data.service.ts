import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchNote = new BehaviorSubject({ type: '', data: '' });
  searchMessage = this.searchNote.asObservable();

  private View = new BehaviorSubject({ type: '', data: '' });
  viewMessage = this.View.asObservable();


  private labelToNote = new BehaviorSubject({ type: '', data: '' });
  labelMessage = this.labelToNote.asObservable();

  // private dragAndDrop = new BehaviorSubject({ type: '', data: '' })
  // dragDropMessage = this.dragAndDrop.asObservable();

  constructor() { }

  searchedNoteMessage(message: any) {
    this.searchNote.next(message)
  }

  changeViewMessage(message: any) {
    this.View.next(message);
  }

  labelToNoteMessage(message: any) {
    this.labelToNote.next(message);
  }

  // dragAndDropMessage(message: any) {
  //   this.dragAndDrop.next(message);
  // }
}
