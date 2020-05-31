import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  allTrash: any;
  ngOnInit(): void {
    this.getAllTrash();
  }
  getAllTrash() {
    this.noteService.GetAllTrash().subscribe(
      (response: any) => {
        this.allTrash = response.data.filter(item => item.isArchive == false && item.isPin == false);
      }
    )
  }
}
