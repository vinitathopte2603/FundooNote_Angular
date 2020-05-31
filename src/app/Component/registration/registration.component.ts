import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../Services/UserServices/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  hide = false;
  email;
  passwrod;
  firstName;
  lastName;
  type;
  register: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private router: Router,   private registerService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwrod: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]]

    })
  }
  get f() { return this.register.controls; }
  registrationForm() {
    this.registerService.Registration(this.register.value).subscribe((response: any) => {
      this.snackBar.open(
        "Registered Successfully",
        "undo",
        { duration: 2000 }
      )
      setTimeout(() => {
        this.router.navigate([''])
      },
        3000);

    }, error => {
      this.snackBar.open(
        "Registration Failed",
        "undo",
        { duration: 2000 }
      )
    });
  }
}
