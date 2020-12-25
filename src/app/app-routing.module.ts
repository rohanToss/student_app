import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NotesComponent } from './component/notes/notes.component';
import { ContentComponent } from './component/content/content.component';
import { NewnoteComponent } from './component/newnote/newnote.component';
import { NotedataComponent } from './component/notedata/notedata.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
  	children:[
  		{path:'',component:ContentComponent},
  		{path:'profile',component:ProfileComponent},
  		{path:'notes',component:NotesComponent,
        children:[
          {path:':id/data',component:NotedataComponent},
          {path:':id/new',component:NewnoteComponent}
      ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
