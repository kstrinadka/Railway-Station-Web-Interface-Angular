import { Component } from '@angular/core';
import {Locomotive} from "../dto/locomotive";
import {LocomotiveService} from "../../service/locomotive.service";

@Component({
  selector: 'app-locomotive-list',
  templateUrl: './locomotive-list.component.html',
  styleUrls: ['./locomotive-list.component.css']
})
export class LocomotiveListComponent {

  locomotives: Locomotive[];
  locomotivesCount: number;


  constructor(private locomotiveService: LocomotiveService) {
  }

  // использовать встроенный метод по считыванию числа со строки

  ngOnInit() {
    this.locomotiveService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.locomotiveService.findAll().subscribe(data => {
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
  private updateParameters(data: Locomotive[]): void {
    this.locomotives = data;
    this.locomotivesCount = data.length;
  }

  getAllLocomotiveOnCurrentStation(value: string) {
    var id = this.convertStringToNumber(value);
    this.locomotiveService.getAllLocomotiveOnCurrentStation(id).subscribe(data => {
      this.updateParameters(data)
    });
  }

  //todo - подредачить, чтобы удобно было дату вводить
  getAllLocomotiveOnStationInTime(value: string) {
    this.locomotiveService.getAllLocomotiveOnStationInTime(value).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotivesByArrivalTime() {
    this.locomotiveService.getAllLocomotivesByArrivalTime().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotivesByRoutesTaken() {
    this.locomotiveService.getAllLocomotivesByRoutesTaken().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotivePassedInspectionInPeriod(value: string, value2: string) {
    this.locomotiveService.getAllLocomotivePassedInspectionInPeriod(value, value2).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotiveRepairedInTime(value: string) {
    this.locomotiveService.getAllLocomotiveRepairedInTime(value).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotiveRepairedCountTimes(value: string) {
    var count = this.convertStringToNumber(value);
    this.locomotiveService.getAllLocomotiveRepairedCountTimes(count).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotiveByRoutesBeforeFirstRepair() {
    this.locomotiveService.getAllLocomotiveByRoutesBeforeFirstRepair().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllLocomotivesByAge() {
    this.locomotiveService.getAllLocomotivesByAge().subscribe(data => {
      this.updateParameters(data)
    });
  }
}
