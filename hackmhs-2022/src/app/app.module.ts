import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './shared/services/auth.service';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { AsyncPipe, CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListComponent,
    TeamComponent,
    HomeComponent,
    TeamSummaryComponent,
    LoginComponent,
    SignUpComponent,
    ListAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
