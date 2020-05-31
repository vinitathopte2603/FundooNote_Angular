import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  allArchive: any;
  status = false;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllArchive();
  }
  getAllArchive() {
    this.noteService.GetAllArchive().subscribe(
      (response: any) => {
        this.allArchive = response.data.filter(item => item.isTrash == false && item.isPin == false)
      }
    )
  }
}
