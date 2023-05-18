import { Component } from '@angular/core';
import {Train} from "../dto/train";
import {TrainService} from "../../service/train.service";


@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent {

  trains: Train[];
  trainsCount: number;


  constructor(private trainService: TrainService) {
  }

  // использовать встроенный метод по считыванию числа со строки

  ngOnInit() {
    this.trainService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.trainService.findAll().subscribe(data => {
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
  private updateParameters(data: Train[]): void {
    this.trains = data;
    this.trainsCount = data.length;
  }

  getAllTrainsOnRoute(value: string) {
    var id = this.convertStringToNumber(value);
    this.trainService.getAllTrainsOnRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllTrainsByRouteDuration() {
    this.trainService.getAllTrainsByRouteDuration().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllTrainsByTicketCost() {
    this.trainService.getAllTrainsByTicketCost().subscribe(data => {
      this.updateParameters(data)
    });
  }
}
