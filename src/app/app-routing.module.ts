import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {LocomotiveMainComponent} from "./locomotives/locomotive-main/locomotive-main.component";
import {LocomotiveListComponent} from "./locomotives/model/locomotive-list/locomotive-list.component";
import {LocomotiveFormComponent} from "./locomotives/locomotive-form/locomotive-form.component";
import {PassengerMainComponent} from "./passengers/passenger-main/passenger-main.component";
import {PassengerListComponent} from "./passengers/model/passenger-list/passenger-list.component";
import {PassengerFormComponent} from "./passengers/passenger-form/passenger-form.component";

// связывание адреса и компонента
const routes: Routes = [
  { path: 'main', component: AppComponent },
  { path: 'workercontroller', component: WorkerMainComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'addworker', component: WorkerFormComponent },
  { path: 'administrators', component: AdministratorsListComponent },
  { path: 'addadministrator', component: AdministratorFormComponent },

  { path: 'flightcontroller', component: FlightMainComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'addflight', component: FlightFormComponent },

  { path: 'locomotivecontroller', component: LocomotiveMainComponent },
  { path: 'locomotives', component: LocomotiveListComponent },
  { path: 'addlocomotive', component: LocomotiveFormComponent },

  { path: 'passengercontroller', component: PassengerMainComponent },
  { path: 'passengers', component: PassengerListComponent },
  { path: 'addpassenger', component: PassengerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
