import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';

/* components */
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NotesComponent } from './component/notes/notes.component';
import { ContentComponent } from './component/content/content.component';
import { NewnoteComponent } from './component/newnote/newnote.component';
import { NotedataComponent } from './component/notedata/notedata.component';
import { ProfileupdateComponent } from './component/profileupdate/profileupdate.component';
import { AchievementsComponent } from './component/achievements/achievements.component';
import { CertificatesComponent } from './component/certificates/certificates.component';
import { AssignmentComponent } from './component/assignment/assignment.component';
import { NewassignmentComponent } from './component/newassignment/newassignment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NotesComponent,
    ContentComponent,
    NewnoteComponent,
    NotedataComponent,
    ProfileupdateComponent,
    AchievementsComponent,
    CertificatesComponent,
    AssignmentComponent,
    NewassignmentComponent,
  ],
  entryComponents:[ProfileupdateComponent,AchievementsComponent,CertificatesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
