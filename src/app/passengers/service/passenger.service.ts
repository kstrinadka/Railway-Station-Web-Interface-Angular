import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Passenger} from "../model/dto/passenger";


@Injectable({
  providedIn: 'root'
})
export class PassengerService {


  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех локомотивов
   */
  public  findAll(): Observable<Passenger[]> {
    let url = `http://localhost:8080/passengers/all`;
    return this.http.get<Passenger[]>(url);
  }

  //todo - не рабочий
  public savePassenger(passenger: Passenger) {
    let url = `http://localhost:8080/passengers/all`;
    return this.http.post<Passenger>(url, passenger);
  }

  /**
   *  Получить перечень пассажиpов на указанном pейсе
   */
  public getAllPassengersByFlight(id: number): Observable<Passenger[]> {
    let url = `http://localhost:8080/passengers/byflight/${id}`;
    return this.http.get<Passenger[]>(url);
  }

  /**
   *  Получить перечень пассажиpов уехавших в указанный день (2023-04-01 00:00:00)
   */
  public getAllPassengersByDepartureDay(day: string): Observable<Passenger[]> {
    let params = new HttpParams();
    params = params.append('day', day);
    let url = `http://localhost:8080/passengers/bydepartureday`;
    return this.http.get<Passenger[]>(url, { params: params });
  }

  /**
   *  Получить перечень пассажиpов уехавших за границу в указанный день (2023-04-02 00:00:00)
   */
  public getAllPassengersAbroadByDepartureDay(day: string): Observable<Passenger[]> {
    let params = new HttpParams();
    params = params.append('day', day);
    let url = `http://localhost:8080/passengers/bydepartureday/abroad`;
    return this.http.get<Passenger[]>(url, { params: params });
  }

  /**
   *  - Перечень всех пассажиров по пpизнаку сдачи вещей в багажное отделение
   */
  public  getAllPassengersByPackingIsTrue(): Observable<Passenger[]> {
    let url = `http://localhost:8080/passengers/packing/true`;
    return this.http.get<Passenger[]>(url);
  }

  /**
   *  Перечень всех пассажирова по половому пpизнаку
   */
  public getByGenderIdentity(gender: string): Observable<Passenger[]> {
    let params = new HttpParams();
    params = params.append('gender', gender);
    let url = `http://localhost:8080/passengers/gender`;
    return this.http.get<Passenger[]>(url, { params: params });
  }

  /**
   *  Перечень всех пассажирова по возрасту
   */
  public  getAllPassengersByAge(): Observable<Passenger[]> {
    let url = `http://localhost:8080/passengers/byage`;
    return this.http.get<Passenger[]>(url);
  }


}
