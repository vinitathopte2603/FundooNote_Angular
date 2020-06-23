import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService/data.service'
import { NoteService } from 'src/app/Services/NoteServices/note.service';
@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.scss']
})
export class SearchNoteComponent implements OnInit {

  constructor(private dataService: DataService, private noteService: NoteService) { }

  ngOnInit(): void {
    this.dataService.searchMessage.subscribe(response => {
      console.log(response)
      if (response.type == "search") {
        var result = response.data;
        this.searchNotes(result);
      }
    })
  }
  searched = [];

  searchNotes(val) {
    this.noteService.SearchNotes(val).subscribe(response => {
      console.log(response);
      this.searched = response.data
    })
  }

}
