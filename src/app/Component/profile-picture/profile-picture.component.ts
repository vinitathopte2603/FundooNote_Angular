import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from '../../Services/UserServices/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  imageChangedEvent: any = '';
  // uploadForm: FormGroup;
  croppedImage: any = '';
  // file1: any
  profilepicture: any = '';
  finalFile;
  constructor(public dialogRef: MatDialogRef<DashBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private userService: UserService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    // this.uploadForm = this.formBuilder.group({ file: [''] });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.profilepicture = <File>event.target.files[0];
    console.log('on select file is ', this.profilepicture);



    // if (this.imageChangedEvent.target.files.length > 0) {
    //   const file = this.imageChangedEvent.target.files[0];
    //   this.file1 = this.uploadForm.get('file');
    //   console.log("here file1 is", this.file1);
    //   this.file1.setValue(file);

    // }

  }


  imageCropped(event: ImageCroppedEvent) {
    console.log('event is ', event);

    this.croppedImage = event
    // this.profilepicture = this.croppedImage;
    console.log("here", this.profilepicture);
    this.finalFile = new File([event.file], this.profilepicture.name,{type:this.profilepicture.type});
  }
  setProfilePicture() {
    // this.dataService.changeMessage('app Note')
    // console.log("image is", this.uploadForm.get('file').value)

    console.log("profile", this.finalFile);
    const formData: FormData = new FormData();
    formData.append('ImageUrl', this.finalFile)

    this.userService.ProfilePicture(formData).subscribe(
      (response: any) => {

        console.log(response);
      }
    );
    this.dialogRef.close(' profile dialog closed ');
  }
}