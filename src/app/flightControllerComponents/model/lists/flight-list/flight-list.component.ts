import { Component } from '@angular/core';
import {Flight} from "../../dto/flight/flight";
import {FlightService} from "../../../service/flight/flight.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {

  flights: Flight[];
  flightsCount: number;


  constructor(private flightService: FlightService) {
  }

  // использовать встроенный метод по считыванию числа со строки

  ngOnInit() {
    this.flightService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.flightService.findAll().subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllCanceledFlights() {
    this.flightService.getAllCanceledFlights().subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllCanceledFlightsOnDirectionForm(value: string) {
    var numberValue = this.convertStringToNumber(value)
    this.getAllCanceledFlightsOnDirection(numberValue);
  }

  public getAllCanceledFlightsOnDirection(id: number) {
    this.flightService.getAllCanceledFlightsOnDirection(id).subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllCanceledFlightsOnRouteForm(value: string) {
    var numberValue = this.convertStringToNumber(value)
    this.getAllCanceledFlightsOnRoute(numberValue);
  }

  public getAllCanceledFlightsOnRoute(id: number) {
    this.flightService.getAllCanceledFlightsOnRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllDelayedFlights() {
    this.flightService.getAllDelayedFlights().subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllDelayedFlightsByReasonForm(reason: string) {
    this.getAllDelayedFlightsByReason(reason);
  }

  public getAllDelayedFlightsByReason(reason: string) {
    this.flightService.getAllDelayedFlightsByReason(reason).subscribe(data => {
      this.updateParameters(data)
    });
  }



  getAllDelayedFlightsOnRouteForm(value: string) {
    var numberValue = this.convertStringToNumber(value)
    this.getAllDelayedFlightsOnRoute(numberValue);
  }

  public getAllDelayedFlightsOnRoute(id: number) {
    this.flightService.getAllDelayedFlightsByRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }



  /**
   *  конвертирует строку в число
   */
  private convertStringToNumber(input: string) {
    console.log(input);
    var numberValue: number;

    if (!input) return 0;

    if(!isNaN(Number(input))){
      numberValue = Number(input);
      return numberValue;
    }

    if (input.trim().length==0) {
      return 0;
    }
    return Number(input);
  }

  /**
   *  обновляет список рейсов на сайте
   */
  private updateParameters(data: Flight[]): void {
    this.flights = data;
    this.flightsCount = data.length;
  }

}
