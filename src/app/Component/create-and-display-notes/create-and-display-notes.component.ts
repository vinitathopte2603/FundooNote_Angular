import { Component, OnInit, EventEmitter } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-create-and-display-notes',
  templateUrl: './create-and-display-notes.component.html',
  styleUrls: ['./create-and-display-notes.component.scss']
})
export class CreateAndDisplayNotesComponent implements OnInit {
  allNotes: any;
  allPinned: any;
  status = false;
  now;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
    this.getAllPinned();
  }
  getAllNotes() {
    this.noteService.GetAllNotes().subscribe(
      (response: any) => {
        console.log("notes", response.data);
        this.allNotes = response.data.filter(item => item.isTrash == false && item.isArchive == false && item.isPin == false)

        setInterval(() => {
          for (var i = 0; i < this.allNotes.length; i++) {
            const abc = new Date();
            this.now = abc.getHours() + ':' + abc.getMinutes();
            if (this.now == response.data[i].reminder) {
              alert(response.data[i].title);
            }
          }
        }, 60000);
      })
  }
  getAllPinned() {
    this.noteService.GetAllPinned().subscribe( response => {
        this.allPinned = response.data.filter(item => item.isTrash == false && item.isArchive == false && item.isPin == true)
        setInterval(() => {
          for (var i = 0; i < this.allPinned.length; i++) {
            const abc = new Date();
            this.now = abc.getHours() + ':' + abc.getMinutes();
            if (this.now == response.data[i].reminder) {
              alert(response.data[i].title);
            }
          }
        }, 60000);
      })
  }
  async addNoteEvent(event) {
    this.getAllNotes();
  }
}
