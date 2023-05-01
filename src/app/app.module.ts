import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './lists/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { UserService } from './service/user/user-service.service';
import { WorkerListComponent } from './lists/worker-list/worker-list.component';
import { WorkerFormComponent } from './forms/worker-form/worker-form.component';
import {WorkerService} from "./service/worker/worker-service.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    WorkerListComponent,
    WorkerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
