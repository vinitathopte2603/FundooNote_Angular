import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component'
import { DataService } from 'src/app/Services/DataService/data.service';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class IconsComponent implements OnInit {
  date = new FormControl(moment());
  customReminderTime;
  reminder;
  now;
  result: any = []
  labels = []
  status = false;
  checked: Boolean = false;
  @Input() noteData;
  @Input() isTrash;
  @Input() isArchive;
  @Output() NoteTrashEvent = new EventEmitter<any>();
  @Output() NoteArchiveEvent = new EventEmitter<any>();
  @Output() DeleteNoteEvent = new EventEmitter<any>();
  @Output() ColorEvent = new EventEmitter<any>();
  @Output() LabelEvent = new EventEmitter<any>();
  @Output() removeLabel = new EventEmitter<any>();
  @Output() reminderEvent = new EventEmitter<any>();
  selectedFile: any = '';
  colorsArray = ['#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed',
    '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa',
    '#f28b82', '#fbbc04', '#fff475', '#fff'
  ]
  constructor(private noteService: NoteService, public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.DateTime();
  }
  ArchiveNote() {
    if (this.noteData.isArchive) {
      var data = {
        value: false
      }
    }
    else {
      var data = {
        value: true
      }
    }
    this.noteService.ArchiveNote(this.noteData.id, data).subscribe(response => {
      this.NoteArchiveEvent.emit();

    })
  }
  DeleteNote() {
    console.log(this.noteData.id);

  }
  moveToTrash() {
    if (this.noteData.isTrash) //restore note
    {
      var data = {
        value: false
      }
    }
    else {
      var data = {
        value: true
      }
    }
    this.noteService.MoveToTrash(this.noteData.id, data).subscribe(response => {
      this.NoteTrashEvent.emit();
    })
  }
  changeColor(color) {
    let data = {
      color: color
    }
    this.noteService.ChangeColor(this.noteData.id, data).subscribe(response => {
      this.ColorEvent.emit();
    })
  }
  AddImage(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('file is ', this.selectedFile);

    const formData: FormData = new FormData();
    formData.append('ImageUrl', this.selectedFile)

    this.noteService.AddImageToNote(this.noteData.id, formData).subscribe(response => {
    })
  }
  Collab() {
    this.dialog.open(CollaboratorComponent, {
      data: this.noteData,
    });
  }
  GetLabels() {
    this.dataService.labelMessage.subscribe(response => {
      if (response.type == "label") {
        this.result = response.data;
      }
    })
  }
  AddLabel(label) {
    if (this.noteData == undefined) {
      this.LabelEvent.emit(label);
    }
    if (this.CheckedLabels(label.id) == false) {
      this.labels.push({
        id: label.id
      })
      let AddLabelToNote = {
        Title: this.noteData.title,
        Description: this.noteData.description,
        Labels: this.labels,
        Collaborators: this.noteData.collaborations,
        Color: this.noteData.color,
        Image: this.noteData.image,
        Reminder: this.noteData.reminder
      }
      this.noteService.AddLabelToNote(AddLabelToNote, this.noteData.id).subscribe(response => {
        this.LabelEvent.emit();
      })
    }
    else {
      this.noteService.RemoveLabel(this.noteData.id, label.id).subscribe(response => {
        this.removeLabel.emit();
      })
    }
  }
  CheckedLabels(labelId: number): boolean {

    var noteLabels: any = []
    noteLabels = this.noteData.labels

    if (noteLabels.length != undefined) {
      for (let l = 0; l < noteLabels.length; l++) {

        if (labelId == noteLabels[l].id) {

          return true;
        }
      }
    }
    else {
      return false;
    }

    return false;
  }
  DateTime(): string {
    var d = new Date();
    var n = d.getDay();

    switch (n) {
      case 1: return 'Mon';
        break;
      case 2: return "Tue";
        break;
      case 3: return "Wed";
        break;
      case 4: return "Thu";
        break;
      case 5: return "Fri";
        break;
      case 6: return "Sat";
        break;
      case 7: return "Sun";
        break;

    }
  }
  AddReminder(value) {

    if (value == 'today') {
      const date = new Date().toDateString();
      this.reminder = date + ' 20:00:00';
      setInterval(() => {
        const abc = new Date();
        this.now = abc.getHours() + ':' + abc.getMinutes();
        if (this.now == this.reminder) {
          alert(this.noteData.title);
        }
      }, 60000);
    }
    else if (value == 'tomorrow') {
      this.reminder = new Date()
      var today = new Date()
      this.reminder.setDate(today.getDate() + 1)
      setInterval(() => {
        const abc = new Date();
        this.now = abc.getHours() + ':' + abc.getMinutes();
        if (this.now == this.reminder) {
          alert(this.noteData.title);
        }
      }, 60000);
    }
    else if (value == 'nextWeek') {
      this.reminder = new Date()
      var today = new Date()
      this.reminder.setDate(today.getDate() + 7)
      setInterval(() => {
        const abc = new Date();
        this.now = abc.getHours() + ':' + abc.getMinutes();
        if (this.now == this.reminder) {
          alert(this.noteData.title);
        }
      }, 60000);
    }
    else if (value == 'customDate') {
      this.reminder = this.date.value._d;
      setInterval(() => {
        const abc = new Date();
        this.now = abc.getHours() + ':' + abc.getMinutes();
        if (this.now == this.reminder) {
          alert(this.noteData.title);
        }
      }, 60000);
    }
    else if (value == 'customTime') {
      this.reminder = this.customReminderTime;
      setInterval(() => {
        const abc = new Date();
        this.now = abc.getHours() + ':' + abc.getMinutes();
        if (this.now == this.reminder) {
          alert(this.noteData.title);
        }
      }, 60000);
    }

    var data = {
      Title: this.noteData.title,
      Description: this.noteData.description,
      Labels: this.labels,
      Collaborators: this.noteData.collaborations,
      Color: this.noteData.color,
      Image: this.noteData.image,
      Reminder: this.reminder
    }
    this.noteService.AddReminder(this.noteData.id, data).subscribe(response => {
      this.reminderEvent.emit();
    })
  }
}
