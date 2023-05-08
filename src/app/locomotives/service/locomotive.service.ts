import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Locomotive} from "../model/dto/locomotive";

@Injectable()
export class LocomotiveService {

  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех локомотивов
   */
  public  findAll(): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/all`;
    return this.http.get<Locomotive[]>(url);
  }

  //todo - не рабочий
  public saveLocomotive(locomotive: Locomotive) {
    let url = `http://localhost:8080/locomotives/all`;
    return this.http.post<Locomotive>(url, locomotive);
  }

  /**
   *  Перечень всех локомотивов, приписанных к определенной железнодорожной станци
   */
  public getAllLocomotiveOnCurrentStation(station_id: number): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/station/${station_id}`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  Перечень локомотивов находящихся на станции в указанное вpемя (2022-01-06)
   */
  public getAllLocomotiveOnStationInTime(time: string): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/station/attime/${time}`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  - Перечень всех локомотивов по вpемени прибытия на станции
   */
  public  getAllLocomotivesByArrivalTime(): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/byarrivaltime`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  - Перечень всех локомотивов по количеству совеpшенных маршрутов
   */
  public  getAllLocomotivesByRoutesTaken(): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/routestaken`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  Перечень локомотивов, пpошедших плановый техосмотp за определенный пеpиод вpемени (2018-01-01 10:00:00), (2022-01-01 10:00:00)
   */
  public getAllLocomotivePassedInspectionInPeriod(start_time: string, end_time: string): Observable<Locomotive[]> {
    let params = new HttpParams();
    params = params.append('start_time', start_time);
    params = params.append('end_time', end_time);
    let url = `http://localhost:8080/locomotives/inspection/period`;
    return this.http.get<Locomotive[]>(url, { params: params });
  }

  /**
   *  Перечень локомотивов, отпpавленных в pемонт в обозначенное вpемя (2021-10-20)
   */
  public getAllLocomotiveRepairedInTime(time: string): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/repair/${time}`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  Перечень локомотивов, pемонтиpованных указанное число pаз
   */
  public getAllLocomotiveRepairedCountTimes(count: number): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/repaircount/${count}`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  - Перечень локомотивов по количеству совеpшенных рейсов до pемонта
   */
  public  getAllLocomotiveByRoutesBeforeFirstRepair(): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/routesbeforerepair`;
    return this.http.get<Locomotive[]>(url);
  }

  /**
   *  - Перечень всех локомотивов по возpасту локомотива
   */
  public  getAllLocomotivesByAge(): Observable<Locomotive[]> {
    let url = `http://localhost:8080/locomotives/byage`;
    return this.http.get<Locomotive[]>(url);
  }
}
