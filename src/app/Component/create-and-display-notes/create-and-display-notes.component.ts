import { Component, OnInit,EventEmitter  } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-create-and-display-notes',
  templateUrl: './create-and-display-notes.component.html',
  styleUrls: ['./create-and-display-notes.component.scss']
})
export class CreateAndDisplayNotesComponent implements OnInit {
  allNotes: any;
  status = false;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteService.GetAllNotes().subscribe(
      (response: any) => {
        console.log("notes", response.data);
        this.allNotes = response.data.filter(item => item.isTrash == false && item.isArchive == false)
      }
    )
  }
  async addNoteEvent(event) {
    this.getAllNotes();
  }
}
