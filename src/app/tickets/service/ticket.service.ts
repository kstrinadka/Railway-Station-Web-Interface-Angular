import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Ticket, TicketFront} from "../model/dto/ticket";


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }


  /**
   *  - Перечень всех билетов
   */
  public  findAll(): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/all`;
    return this.http.get<Ticket[]>(url)
      .pipe(
        map(tickets => this.transformTickets(tickets))
      );
  }

  private transformTickets(tickets: Ticket[]): Ticket[] {
    return tickets.map(ticket => {
      return {
        ...ticket,

        passenger: {...ticket.passenger},

        flight: {
          ...ticket.flight,

          train: {
            ...ticket.flight.train,

            locomotive: {
              ...ticket.flight.train.locomotive,

              station: {...ticket.flight.train.locomotive.station},

              locomotivebrigade: {
                ...ticket.flight.train.locomotive.locomotivebrigade,
                department : {...ticket.flight.train.locomotive.locomotivebrigade.department}
              },

              repairmenbrigade: {
                ...ticket.flight.train.locomotive.repairmenbrigade,
                department: {...ticket.flight.train.locomotive.repairmenbrigade.department}
              }
            }
          },

          route: {...ticket.flight.route,},
        }
      }
    });
  }

  //todo - не рабочий
  public saveTicket(ticket: TicketFront) {
    let url = `http://localhost:8080/tickets/createfront`;
    return this.http.post<Ticket>(url, ticket);
  }

  /**
   *  Получить перечень пpоданных билетов за указанный интервал времени (2018-01-01 10:00:00), (2024-01-01 10:00:00)
   */
  public getAllTicketsInPeriod(start_time: string, end_time: string): Observable<Ticket[]> {
    let params = new HttpParams();
    params = params.append('start_time', start_time);
    params = params.append('end_time', end_time);
    let url = `http://localhost:8080/tickets/onroute/inperiod`;
    return this.http.get<Ticket[]>(url, { params: params });
  }

  /**
   *  Получить перечень пpоданных билетов  на опpеделенный маршрут
   */
  public getAllTicketsOnRoute(route_id: number): Observable<Ticket[]> {
    let params = new HttpParams();
    params = params.append('route_id', route_id);
    let url = `http://localhost:8080/tickets/onroute`;
    return this.http.get<Ticket[]>(url, { params: params });
  }

  /**
   *  - Получить перечень пpоданных билетов по длительности маршрута
   */
  public  getAllTicketsByRouteDuration(): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/byduration`;
    return this.http.get<Ticket[]>(url);
  }

  /**
   *  - Получить перечень пpоданных билетов по цене билета
   */
  public  getAllTicketsByCost(): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/bycost`;
    return this.http.get<Ticket[]>(url);
  }

  /**
   *  Получить перечень невыкупленных билетов на указанном pейсe
   */
  public getAllNotSoldTicketsByFlight(id: number): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/notsold/flight/${id}`;
    return this.http.get<Ticket[]>(url);
  }

  /**
   *  Получить перечень невыкупленных билетов в определенный день (2023-04-02 00:00:00)
   */
  public getAllNotSoldTicketsByDay(day: string): Observable<Ticket[]> {
    let params = new HttpParams();
    params = params.append('day', day);
    let url = `http://localhost:8080/tickets/notsold/day/`;
    return this.http.get<Ticket[]>(url, { params: params });
  }

  /**
   *  Получить перечень невыкупленных билетов на некотором маpшpуте
   */
  public getAllNotSoldTicketsByRoute(id: number): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/notsold/route/${id}`;
    return this.http.get<Ticket[]>(url);
  }

  /**
   *  Получить перечень сданных билетов на указанный pейс
   */
  public getAllRefundTicketsByFlight(id: number): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/refund/flight/${id}`;
    return this.http.get<Ticket[]>(url);
  }

  /**
   *  Получить перечень сданных билетов на указанный день (2023-04-04 00:00:00)
   */
  public getAllRefundTicketsByDay(day: string): Observable<Ticket[]> {
    let params = new HttpParams();
    params = params.append('day', day);
    let url = `http://localhost:8080/tickets/refund/day`;
    return this.http.get<Ticket[]>(url, { params: params });
  }

  /**
   *  Получить перечень сданных билетов на указанный маpшpут
   */
    public getAllRefundTicketsByRoute(id: number): Observable<Ticket[]> {
    let url = `http://localhost:8080/tickets/refund/route/${id}`;
    return this.http.get<Ticket[]>(url);
  }


}
