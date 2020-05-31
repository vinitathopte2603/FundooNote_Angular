import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from '../../Services/Labels/label.service';
@Component({
  selector: 'app-label-operations',
  templateUrl: './label-operations.component.html',
  styleUrls: ['./label-operations.component.scss']
})
export class LabelOperationsComponent implements OnInit {
  status = false;
  public label: string;
  constructor(public dialogRef: MatDialogRef<LabelOperationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private labelService: LabelService) {


  }

  ngOnInit(): void {
  }
  createLabel() {

    var data = {
      label: this.label
    }
    this.labelService.CreateLabel(data).subscribe(response => {


    })

  }
  DeleteLabel(labelData) {
    this.labelService.DeleteLabel(labelData.id).subscribe(response=>{
      console.log("label ",response);
      
    })

  }
  EditLabel(labelData) {
    var data = {
      label: labelData.label
    }
    this.labelService.EditLabel(data, labelData.id).subscribe(response => {


    }

    )
  }
}
