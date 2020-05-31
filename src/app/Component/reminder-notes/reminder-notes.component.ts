import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-reminder-notes',
  templateUrl: './reminder-notes.component.html',
  styleUrls: ['./reminder-notes.component.scss']
})
export class ReminderNotesComponent implements OnInit {
  allReminder: any;
  status = false;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllReminder();
  }
  getAllReminder() {
    this.noteService.GetAllReminder().subscribe(
      (response: any) => {
        this.allReminder = response.data.filter(item => item.isTrash == false && item.isArchive == false)
      }
    )
  }
}
