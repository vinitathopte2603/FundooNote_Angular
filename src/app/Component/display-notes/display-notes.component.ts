import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notes;
  @Input() isTrash
  @Input() isArchive;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  EditNote(noteData) {
    this.dialog.open(EditNoteComponent, {
      data: noteData,
      panelClass: 'EditNote'
    });
  }
}
