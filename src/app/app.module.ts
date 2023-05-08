import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkerListComponent } from './workerControllerComponents/model/lists/worker-list/worker-list.component';
import { WorkerFormComponent } from './workerControllerComponents/forms/worker-form/worker-form.component';
import {WorkerService} from "./workerControllerComponents/service/worker/worker-service.service";
import { WorkerMainComponent } from './workerControllerComponents/worker-main/worker-main.component';
import { AdministratorsListComponent } from './workerControllerComponents/model/lists/administrators-list/administrators-list.component';
import { AdministratorFormComponent } from './workerControllerComponents/forms/administrator-form/administrator-form.component';
import { FlightMainComponent } from './flightControllerComponents/flight-main/flight-main.component';
import { FlightFormComponent } from './flightControllerComponents/forms/flight-form/flight-form.component';
import { FlightListComponent } from './flightControllerComponents/model/lists/flight-list/flight-list.component';
import {FlightService} from "./flightControllerComponents/service/flight/flight.service";
import { LocomotiveMainComponent } from './locomotives/locomotive-main/locomotive-main.component';
import { LocomotiveFormComponent } from './locomotives/locomotive-form/locomotive-form.component';
import { LocomotiveListComponent } from './locomotives/model/locomotive-list/locomotive-list.component';
import {LocomotiveService} from "./locomotives/service/locomotive.service";
import { PassengerFormComponent } from './passengers/passenger-form/passenger-form.component';
import { PassengerMainComponent } from './passengers/passenger-main/passenger-main.component';
import { PassengerListComponent } from './passengers/model/passenger-list/passenger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    WorkerFormComponent,
    WorkerMainComponent,
    AdministratorsListComponent,
    AdministratorFormComponent,
    FlightMainComponent,
    FlightFormComponent,
    FlightListComponent,
    LocomotiveMainComponent,
    LocomotiveFormComponent,
    LocomotiveListComponent,
    PassengerFormComponent,
    PassengerMainComponent,
    PassengerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WorkerService,
    FlightService,
    LocomotiveService],

  // стартовый компонент, с которого стартует приложение
  bootstrap: [AppComponent]
})
export class AppModule { }
