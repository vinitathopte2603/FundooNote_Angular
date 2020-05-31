import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../Services/UserServices/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
email;
submitted = false;

forgotpassword: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private forgotpasswordService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgotpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]

    })
  }
  get f() { return this.forgotpassword.controls; }
  ForgotPassword(){
    this.forgotpasswordService.ForgotPassword(this.forgotpassword.value).subscribe((response: any) => {
      this.snackBar.open(
        "mail sent to your registered email",
        "undo",
        { duration: 2000 }
      )
     

    }, error => {
      this.snackBar.open(
        "Enter valid email address",
        "undo",
        { duration: 2000 }
      )
    });
  }
}
