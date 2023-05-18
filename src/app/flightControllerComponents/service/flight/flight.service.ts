import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Flight, FlightFront} from "../../model/dto/flight/flight";

@Injectable()
export class FlightService {



  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех рейсов
   */
  public findAll(): Observable<Flight[]> {
    let url = `http://localhost:8080/flights/all`;
    return this.http.get<Flight[]>(url).pipe(
      map(workers => this.transformFlights(workers))
    );
  }

  private transformFlights(flights: Flight[]): Flight[] {
    return flights.map(flight => {
      return {
        ...flight,

        train: {
          ...flight.train,

          locomotive: {
            ...flight.train.locomotive,

            station: {...flight.train.locomotive.station},

            locomotivebrigade: {
              ...flight.train.locomotive.locomotivebrigade,
              department : {...flight.train.locomotive.locomotivebrigade.department}
            },

            repairmenbrigade: {
              ...flight.train.locomotive.repairmenbrigade,
              department: {...flight.train.locomotive.repairmenbrigade.department}
            }
          }
        },

        route: {...flight.route,},
      }
    });
  }


  public saveFlight(flight: FlightFront) {
    let url = `http://localhost:8080/flights/createfront`;
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
