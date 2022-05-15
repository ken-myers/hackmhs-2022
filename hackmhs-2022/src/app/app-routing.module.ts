import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TeamComponent } from './components/team/team.component';
import { TimelineComponent } from './components/timeline/timeline.component';


const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'task-list', component: TaskListComponent },
{ path: 'team', component: TeamComponent },
{ path: 'timeline', component: TimelineComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
