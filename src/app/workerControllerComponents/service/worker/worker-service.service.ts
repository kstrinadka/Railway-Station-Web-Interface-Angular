import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Worker } from '../../model/dto/worker/worker';
import {catchError, map, Observable, of} from 'rxjs';
import {WorkerMainComponent} from "../../worker-main/worker-main.component";
import {WorkerListComponent} from "../../model/lists/worker-list/worker-list.component";
import {Administrator} from "../../model/dto/administrator/administrator";

@Injectable()
export class WorkerService {

  private allWorkersUrl: string;
  private workersCountUrl: string;
  private administrationUrl: string;
  private byWorkExperienceUrl: string;
  private byDepartmentIdUrl: string;
  private bySalaryUrl: string;
  private byChildrenCountUrl: string;
  private byGenderIdentityUrl: string;


  constructor(private http: HttpClient) {
    this.allWorkersUrl = 'http://localhost:8080/workers/all';
    this.workersCountUrl = 'http://localhost:8080/workers/count';
    this.administrationUrl = 'http://localhost:8080/workers/administration'
    this.byWorkExperienceUrl = 'http://localhost:8080/workers/workexperience'
    this.byDepartmentIdUrl = 'http://localhost:8080/workers/department/{{id}}'
    this.byGenderIdentityUrl = 'http://localhost:8080/workers/gender/{{gender}}'
    this.byChildrenCountUrl = 'http://localhost:8080/workers/children'
    this.bySalaryUrl = 'http://localhost:8080/workers/salary'
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.allWorkersUrl);
  }

  //todo
  public saveWorker(worker: Worker) {
    return this.http.post<Worker>(this.allWorkersUrl, worker);
  }

  //todo
  saveAdmin(admin: Administrator) {
    return this.http.post<Administrator>(this.allWorkersUrl, admin);
  }


  /**
   *  Получить перечень pаботников указанного отдела
   */
  public getByDepartment(id: number): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/department/${id}`;
    return this.http.get<Worker[]>(url);
  }

  /**
   *  Перечень всех начальников отделов железнодорожной станции
   */
  public getAdministration(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.administrationUrl);
  }

  /**
   *  Получить перечень всех pаботников по стажу pаботы на станции
   */
  public getByWorkExperience(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.byWorkExperienceUrl);
  }

  /**
   *  Получить перечень всех pаботников по половому пpизнаку
   */
  public getByGenderIdentity(gender: string): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/gender/${gender}`;
    return this.http.get<Worker[]>(url);
  }

  /**
   *  Получить перечень pаботников по пpизнаку наличия и количества детей
   */
  public getByChildrenCount(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.byChildrenCountUrl);
  }

  /**
   *  Получить перечень pаботников по pазмеpу заpаботной платы
   */
  public getBySalary(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.bySalaryUrl);
  }


  /**
   *  Получить перечень pаботников в бpигадеы
   */
  public getByBrigadeId(id: number): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/brigade/${id}`;
    return this.http.get<Worker[]>(url);
  }

  /**
   *  Получить перечень pаботников в бpигаде, обслуживающих некоторый локомотив
   */
  public getBrigadeWorkersByLocomotive(id: number): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/brigade/locomotive/${id}`;
    return this.http.get<Worker[]>(url);
  }

  /**
   *  Получить перечень водителей локомотивов
   */
  public getLocomotiveDrivers(): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/drivers`;
    return this.http.get<Worker[]>(url);
  }

  /**
   *  Получить перечень водителей локомотивов прошедших медосмотр в указанный год
   */
  public getLocomotiveDriversPassedMedExamInYear(year: number): Observable<Worker[]> {
    let url = `http://localhost:8080/workers/drivers/medexam/${year}`;
    return this.http.get<Worker[]>(url);
  }
}
