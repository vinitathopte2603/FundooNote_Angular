import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateAndDisplayNotesComponent } from './Component/create-and-display-notes/create-and-display-notes.component';
import { ReminderNotesComponent } from './Component/reminder-notes/reminder-notes.component';
import { ArchiveNotesComponent } from './Component/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Component/trash-notes/trash-notes.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';
import { IconsComponent } from './Component/icons/icons.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatBadgeModule } from '@angular/material/badge';
import { ProfilePictureComponent } from './Component/profile-picture/profile-picture.component';
import { LabelOperationsComponent } from './Component/label-operations/label-operations.component';
import { CollaboratorComponent } from './Component/collaborator/collaborator.component';
import { SearchNoteComponent } from './Component/search-note/search-note.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashBoardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CreateAndDisplayNotesComponent,
    ReminderNotesComponent,
    ArchiveNotesComponent,
    TrashNotesComponent,
    CreateNoteComponent,
    DisplayNotesComponent,
    IconsComponent,
    EditNoteComponent,
    ProfilePictureComponent,
    LabelOperationsComponent,
    CollaboratorComponent,
    SearchNoteComponent,

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    ImageCropperModule,
    MatBadgeModule,
    MatChipsModule,
    MatCheckboxModule,
    DragDropModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }