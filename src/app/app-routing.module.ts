import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/Component/login/login.component"
import { RegistrationComponent } from './Component/registration/registration.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { CreateAndDisplayNotesComponent } from './Component/create-and-display-notes/create-and-display-notes.component';
import { ReminderNotesComponent } from './Component/reminder-notes/reminder-notes.component';
import { ArchiveNotesComponent } from './Component/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Component/trash-notes/trash-notes.component';
import { SearchNoteComponent } from './Component/search-note/search-note.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {
    path: 'u/0', component: DashBoardComponent,

    children: [
      { path: 'u/0', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CreateAndDisplayNotesComponent },
      { path: 'reminder', component: ReminderNotesComponent },
      { path: 'archive', component: ArchiveNotesComponent },
      { path: 'trash', component: TrashNotesComponent },
      { path: 'search', component: SearchNoteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
