import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component'
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteData;
  @Input() isTrash;
  @Input() isArchive;
  selectedFile: any = '';
  colorsArray = ['#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed',
    '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa',
    '#f28b82', '#fbbc04', '#fff475', '#fff'
  ]
  constructor(private noteService: NoteService, public dialog: MatDialog) { }

  ngOnInit(): void {
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
      console.log("archive", response);

    })
  }
  DeleteNote() {
    console.log(this.noteData.id);

  }
  moveToTrash() {
    console.log(this.noteData.id);
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

    })
  }
  changeColor(color) {
    let data = {

      color: color

    }
    this.noteService.ChangeColor(this.noteData.id, data).subscribe(response => {
    })
  }
  AddImage(event: any) {
    this.selectedFile = event.target.files[0];
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
}