import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { DataService } from '../../Services/DataService/data.service';
import { NoteService } from 'src/app/Services/NoteServices/note.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  view = '1';
  @Input() notes;
  @Input() isTrash
  @Input() isArchive;
  @Output() NoteTrash = new EventEmitter<any>();
  @Output() NoteArchive = new EventEmitter<any>();
  @Output() NoteColor = new EventEmitter<any>();
  @Output() labelToNote = new EventEmitter<any>();
  @Output() NotePin = new EventEmitter<any>();
  @Output() removeLabelEvent = new EventEmitter<any>();
  @Output() reminderNote = new EventEmitter<any>();
  @Output() removeReminder = new EventEmitter<any>();
  selectable = true;
  removable = true;
  // horizontalDrag: any = true;
  constructor(public dialog: MatDialog, private dataService: DataService, private noteService: NoteService) { }


  ngOnInit(): void {
    this.dataService.viewMessage.subscribe(response => {
      if (response.type == "listGridView") {
        this.view = response.data;
      }
    })
    // this.dataService.dragDropMessage.subscribe(response => {
    //   if (response.type == "dragDirection") {
    //     this.horizontalDrag = response.data;
    //   }
    // })
  }
  EditNote(noteData) {
    this.dialog.open(EditNoteComponent, {
      data: noteData,
      panelClass: 'EditNote'
    });
  }

  remove(noteId, label): void {
    this.noteService.RemoveLabel(noteId, label.id).subscribe(response => {
      this.removeLabelEvent.emit();
    })
  }
  moveToTrash() {
    this.NoteTrash.emit();
  }
  moveToArchive() {
    this.NoteArchive.emit();
  }
  ColorNote() {
    this.NoteColor.emit();
  }
  labelOnNote() {
    this.labelToNote.emit();
  }
  Reminder() {
    this.reminderNote.emit();
  }
  pinNote(noteData) {

    if (noteData.isPin) {
      var data = {
        value: false
      }
    }
    else {
      var data = {
        value: true
      }
    }
    this.noteService.PinNote(noteData.id, data).subscribe(response => {
      this.NotePin.emit();
    })
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }
  RemoveLabel(noteData) {

    let updateData = {
      Title: noteData.title,
      Description: noteData.description,
      Labels: noteData.labels,
      Collaborators: noteData.collaborations,
      Color: noteData.color,
      Image: noteData.image,
      Reminder: null
    }

    this.noteService.UpdateNote(noteData.id, updateData).subscribe(response => {
      this.removeReminder.emit();
    })
  }
}