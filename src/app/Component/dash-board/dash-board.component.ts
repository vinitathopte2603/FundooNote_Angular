import { OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { LabelService } from '../../Services/Labels/label.service';
import { LabelOperationsComponent } from '../label-operations/label-operations.component';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  labels: any;
  value = '';
  status = false;
  fullName = localStorage.getItem('fullName');
  email = localStorage.getItem('email')
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, public dialog: MatDialog, private labelService: LabelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.AllLabels();
  }
  Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email")
    this.route.navigate(['/'])
  }
  ProfilePicture() {
    this.dialog.open(ProfilePictureComponent, {
      panelClass: 'profilepicture'
    });
  }
  AllLabels() {
    this.labelService.GetAllLabels().subscribe(response => {
      this.labels = response.data
    })
  }
  EditLabel(labeldata) {
    this.dialog.open(LabelOperationsComponent, {
      data: labeldata
    });
  }
}

