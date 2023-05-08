import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Route} from "../model/dto/route";


@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех маршрутов
   */
  public  findAll(): Observable<Route[]> {
    let url = `http://localhost:8080/routes/all`;
    return this.http.get<Route[]>(url);
  }

  //todo - не рабочий
  public saveRoutes(route: Route) {
    let url = `http://localhost:8080/routes/all`;
    return this.http.post<Route>(url, route);
  }

  /**
   * Получить перечень маршрутов указанной категоpии -> 'Туристический', 'Специальный', 'Внутренний', 'Международный'
   */
  public getAllRoutesByCategory(category: string): Observable<Route[]> {
    let params = new HttpParams();
    params = params.append('category', category);
    let url = `http://localhost:8080/routes/category`;
    return this.http.get<Route[]>(url, { params: params });
  }

  /**
   * Получить перечень маршрутов следующих в определенном напpавлении -> 'Station 4', ...
   */
  public getAllRoutesByDirection(direction: string): Observable<Route[]> {
    let params = new HttpParams();
    params = params.append('direction', direction);
    let url = `http://localhost:8080/routes/direction`;
    return this.http.get<Route[]>(url, { params: params });
  }
}
