import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  status = false;
  constructor(public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private noteService: NoteService) {


  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  editNote() {

    let updateData = {
      Title: this.data.title,
      Description: this.data.description,
      Labels: this.data.labels,
      Collaborators: this.data.collaborations,
      Color: this.data.color,
      Image: this.data.image,
      Reminder: this.data.reminder
    }
    this.noteService.UpdateNote(this.data.id, updateData).subscribe(response => {
    

    })
    this.dialogRef.close();
  }
}
