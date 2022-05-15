import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TeamComponent } from './components/team/team.component';
import { TimelineComponent } from './components/timeline/timeline.component';


const routes: Routes = [{path: 'login', component: LoginComponent}, {path:'task-list', component: TaskListComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
