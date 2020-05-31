import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../Services/NoteServices/note.service';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  status = false;
  collab: [];
  label: [];
  note: FormGroup;
  @Output() addNoteEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
    this.note = this.formBuilder.group({
      title: '',
      description: '',
      labels: [],
      collaborators: []
    })
  }
  AddNote() {
    let obj = this.note.value;
    obj.labels = [];
    obj.collaborators = []
    this.noteService.CreateNote(obj).subscribe(response => {
      this.addNoteEvent.emit();

    })
  }
}
