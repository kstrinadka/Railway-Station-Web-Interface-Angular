import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Train, TrainFront} from "../model/dto/train";


@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех поездов
   */
  public  findAll(): Observable<Train[]> {
    let url = `http://localhost:8080/trains/all`;
    return this.http.get<Train[]>(url);
  }

  //todo - не рабочий
  public saveTrain(train: TrainFront) {
    let url = `http://localhost:8080/trains/createfront`;
    return this.http.post<Train>(url, train);
  }

  /**
   *  Получить перечень поездов на указанном маpшpуте
   */
  public getAllTrainsOnRoute(id: number): Observable<Train[]> {
    let url = `http://localhost:8080/trains/route/${id}`;
    return this.http.get<Train[]>(url);
  }

  /**
   *  - Получить перечень поездов по длительности маршрута
   */
  public  getAllTrainsByRouteDuration(): Observable<Train[]> {
    let url = `http://localhost:8080/trains/byrouteduration`;
    return this.http.get<Train[]>(url);
  }

  /**
   *  - Получить перечень поездов по цене билета
   */
  public  getAllTrainsByTicketCost(): Observable<Train[]> {
    let url = `http://localhost:8080/trains/byticketcost`;
    return this.http.get<Train[]>(url);
  }
}
