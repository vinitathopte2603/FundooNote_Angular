import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../Services/UserServices/user.service';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide = false;
  submitted = false;
  password;
  reset: FormGroup;
  token: string;
  constructor(public formBuilder: FormBuilder,
    private resetService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    this.reset = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]

    })
  }
  get f() { return this.reset.controls; }
  ResetPassword(){
    this.resetService.ResetPassword(this.reset.value,this.token).subscribe((response: any) => {
      this.snackBar.open(
        "Password changed Successfully",
        "undo",
        { duration: 2000 }
      )
      setTimeout(() => {
        this.router.navigate([''])
      },
        3000);

    }, error => {
      this.snackBar.open(
        " Failed to change password",
        "undo",
        { duration: 2000 }
      )
    });
  }
}
