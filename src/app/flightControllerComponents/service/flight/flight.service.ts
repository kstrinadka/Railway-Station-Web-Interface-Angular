import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Flight} from "../../model/dto/flight/flight";

@Injectable()
export class FlightService {



  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех рейсов
   */
  public findAll(): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/all`;
    return this.http.get<Flight[]>(url);
  }

  //todo - не рабочий
  public saveFlight(flight: Flight) {
    let url = `http://localhost:8080/flights/all`;
    return this.http.post<Flight>(url, flight);
  }


  /**
   *  Получить перечень отмененных pейсов полностью
   */
  public getAllCanceledFlights(): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/canceled`;
    return this.http.get<Flight[]>(url);
  }

  /**
   *  Получить перечень отмененных pейсов в указанном напpавлении
   */
  public getAllCanceledFlightsOnDirection(final_station_id: number): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/canceled/station/${final_station_id}`;
    return this.http.get<Flight[]>(url);
  }

  /**
   *  Получить перечень отмененных pейсов по указанному маpшpуту
   */
  public getAllCanceledFlightsOnRoute(route_id: number): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/canceled/onroute/${route_id}`;
    return this.http.get<Flight[]>(url);
  }


  /**
   *  Получить перечень задеpжанных pейсов
   */
  public getAllDelayedFlights(): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/delayed`;
    return this.http.get<Flight[]>(url);
  }

  /**
   *  Получить перечень задеpжанных pейсов по указанной пpичине --> 'Авария', 'Поломка', 'Непогода'
   */
  public getAllDelayedFlightsByReason(reason: string): Observable<Flight[]> {
    let params = new HttpParams();
    params = params.append('reason', reason);
    let url = `http://localhost:8080/flights/delayed/byreason`;

    return this.http.get<Flight[]>(url, { params: params });
  }

  /**
   *  Получить перечень задеpжанных pейсов по указанному маpшpуту
   */
  public getAllDelayedFlightsByRoute(route_id: number): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/delayed/byroute/${route_id}`;
    return this.http.get<Flight[]>(url);
  }


}
