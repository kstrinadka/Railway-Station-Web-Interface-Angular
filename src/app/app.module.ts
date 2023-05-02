import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './lists/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { UserService } from './service/user/user-service.service';
import { WorkerListComponent } from './workerControllerComponents/model/lists/worker-list/worker-list.component';
import { WorkerFormComponent } from './workerControllerComponents/forms/worker-form/worker-form.component';
import {WorkerService} from "./workerControllerComponents/service/worker/worker-service.service";
import { WorkerMainComponent } from './workerControllerComponents/worker-main/worker-main.component';
import { AdministratorsListComponent } from './workerControllerComponents/model/lists/administrators-list/administrators-list.component';
import { AdministratorFormComponent } from './workerControllerComponents/forms/administrator-form/administrator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    WorkerListComponent,
    WorkerFormComponent,
    WorkerMainComponent,
    AdministratorsListComponent,
    AdministratorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    WorkerService],

  // стартовый компонент, с которого стартует приложение
  bootstrap: [AppComponent]
})
export class AppModule { }
