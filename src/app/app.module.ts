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
import {PassengerService} from "./passengers/service/passenger.service";
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { RouteListComponent } from './routes/model/route-list/route-list.component';
import { RouteFormComponent } from './routes/route-form/route-form.component';
import {RouteService} from "./routes/service/route.service";
import { TicketMainComponent } from './tickets/ticket-main/ticket-main.component';
import { TicketListComponent } from './tickets/model/ticket-list/ticket-list.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import {TicketService} from "./tickets/service/ticket.service";
import { TrainListComponent } from './trains/model/train-list/train-list.component';
import { TrainFormComponent } from './trains/train-form/train-form.component';
import { TrainMainComponent } from './trains/train-main/train-main.component';
import {TrainService} from "./trains/service/train.service";

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
    PassengerListComponent,
    RouteMainComponent,
    RouteListComponent,
    RouteFormComponent,
    TicketMainComponent,
    TicketListComponent,
    TicketFormComponent,
    TrainListComponent,
    TrainFormComponent,
    TrainMainComponent
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
    LocomotiveService,
    PassengerService,
    RouteService,
    TicketService,
    TrainService],

  // стартовый компонент, с которого стартует приложение
  bootstrap: [AppComponent]
})
export class AppModule { }
