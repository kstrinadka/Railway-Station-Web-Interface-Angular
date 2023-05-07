import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './lists/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import {WorkerListComponent} from "./workerControllerComponents/model/lists/worker-list/worker-list.component";
import {WorkerFormComponent} from "./workerControllerComponents/forms/worker-form/worker-form.component";
import {WorkerMainComponent} from "./workerControllerComponents/worker-main/worker-main.component";
import {AppComponent} from "./app.component";
import {
  AdministratorsListComponent
} from "./workerControllerComponents/model/lists/administrators-list/administrators-list.component";
import {
  AdministratorFormComponent
} from "./workerControllerComponents/forms/administrator-form/administrator-form.component";
import {FlightMainComponent} from "./flightControllerComponents/flight-main/flight-main.component";
import {FlightListComponent} from "./flightControllerComponents/model/lists/flight-list/flight-list.component";
import {FlightFormComponent} from "./flightControllerComponents/forms/flight-form/flight-form.component";

// связывание адреса и компонента
const routes: Routes = [
  { path: 'main', component: AppComponent },
  { path: 'workercontroller', component: WorkerMainComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'addworker', component: WorkerFormComponent },
  { path: 'administrators', component: AdministratorsListComponent },
  { path: 'addadministrator', component: AdministratorFormComponent },

  { path: 'flightcontroller', component: FlightMainComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'addflight', component: FlightFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
