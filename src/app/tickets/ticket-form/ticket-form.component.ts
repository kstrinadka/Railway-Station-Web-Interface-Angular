import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketFront} from "../model/dto/ticket";
import {TicketService} from "../service/ticket.service";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  ticket: TicketFront;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) {
    this.ticket = new TicketFront();
  }

  onSubmit() {
    this.ticketService.saveTicket(this.ticket).subscribe(result => this.gotoTicketsList());
  }

  gotoTicketsList() {
    this.router.navigate(['/tickets']);
  }

}
