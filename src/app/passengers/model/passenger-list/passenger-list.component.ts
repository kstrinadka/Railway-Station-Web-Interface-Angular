import { Component } from '@angular/core';
import {Passenger} from "../dto/passenger";
import {PassengerService} from "../../service/passenger.service";

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent {

  passengers: Passenger[];
  passengersCount: number;


  constructor(private passengerService: PassengerService) {
  }

  // использовать встроенный метод по считыванию числа со строки

  ngOnInit() {
    this.passengerService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.passengerService.findAll().subscribe(data => {
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
   *  обновляет список пассажирова после запроса на бэк
   */
  private updateParameters(data: Passenger[]): void {
    this.passengers = data;
    this.passengersCount = data.length;
  }

  getAllPassengersByFlight(value: string) {
    var id = this.convertStringToNumber(value);
    this.passengerService.getAllPassengersByFlight(id).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllPassengersByDepartureDay(value: string) {
    this.passengerService.getAllPassengersByDepartureDay(value).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllPassengersAbroadByDepartureDay(value: string) {
    this.passengerService.getAllPassengersAbroadByDepartureDay(value).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllPassengersByPackingIsTrue() {
    this.passengerService.getAllPassengersByPackingIsTrue().subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllPassengersByGenderIdentity(gender: string) {
    this.passengerService.getByGenderIdentity(gender).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllPassengersByAge() {
    this.passengerService.getAllPassengersByAge().subscribe(data => {
      this.updateParameters(data)
    });
  }


}
