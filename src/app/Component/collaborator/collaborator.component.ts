import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  collab: string
  users: []
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private noteService: NoteService) { }

  ngOnInit(): void {
  }
  getAllUsers(collab) {
    this.noteService.GetAllUsers(collab).subscribe(response => {
      this.users = response.data
    })
  }
  addCollab() {

  }
}
