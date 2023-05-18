import { Component } from '@angular/core';
import {Ticket} from "../dto/ticket";
import {TicketService} from "../../service/ticket.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  tickets: Ticket[];
  ticketsCount: number;


  constructor(private ticketService: TicketService) {
  }


  ngOnInit() {
    this.ticketService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.ticketService.findAll().subscribe(data => {
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
  private updateParameters(data: Ticket[]): void {
    this.tickets = data;
    this.ticketsCount = data.length;
  }

  getAllTicketsInPeriod(start_date: string, end_date: string) {
    this.ticketService.getAllTicketsInPeriod(start_date, end_date).subscribe(data => {
      this.updateParameters(data)
    });


  }

  getAllTicketsOnRoute(value: string) {
    var id = this.convertStringToNumber(value);
    this.ticketService.getAllTicketsOnRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllTicketsByRouteDuration() {
    this.ticketService.getAllTicketsByRouteDuration().subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllTicketsByCost() {
    this.ticketService.getAllTicketsByCost().subscribe(data => {
      this.updateParameters(data)
    });


  }

  getAllNotSoldTicketsByFlight(value: string) {
    var id = this.convertStringToNumber(value);
    this.ticketService.getAllNotSoldTicketsByFlight(id).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllNotSoldTicketsByDay(value: string) {
    this.ticketService.getAllNotSoldTicketsByDay(value).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllNotSoldTicketsByRoute(value: string) {
    var id = this.convertStringToNumber(value);
    this.ticketService.getAllNotSoldTicketsByRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllRefundTicketsByFlight(value: string) {
    var id = this.convertStringToNumber(value);
    this.ticketService.getAllRefundTicketsByFlight(id).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllRefundTicketsByDay(value: string) {
    this.ticketService.getAllRefundTicketsByDay(value).subscribe(data => {
      this.updateParameters(data)
    });
  }


  getAllRefundTicketsByRoute(value: string) {
    var id = this.convertStringToNumber(value);
    this.ticketService.getAllRefundTicketsByRoute(id).subscribe(data => {
      this.updateParameters(data)
    });
  }
}
