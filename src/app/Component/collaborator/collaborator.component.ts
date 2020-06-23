import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../Services/NoteServices/note.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;



  collab: string
  email = localStorage.getItem('email')
  users: []
  userId: any
  collabList = []
  collabEmails = []
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private noteService: NoteService) { }

  ngOnInit(): void {


  }
  
  getAllUsers(collab) {
    this.noteService.GetAllUsers(collab).subscribe(response => {
      this.users = response.data
    })
  }
  Collaborte(user) {

    this.collabList.push({
      userId: user.userId
    })
    this.collabEmails.push({
      emails: user.email,
      id: user.userId
    })
  }
  AddCollab() {
    var data = {
      collaboratorRequestModels: this.collabList
    }


    this.noteService.AddCollaboration(this.data.id, data).subscribe(response => {
    })
  }
  RemoveCollaborte(userData) {
    for (var i = 0; i < this.collabList.length; i++) {
      if (this.collabList[i].userId == userData.id) {
        this.collabList.splice(i, 1);
        this.collabEmails.splice(i, 1);
      }
    }
  }
  openMyMenu() {
    this.trigger.openMenu();
  }

}

