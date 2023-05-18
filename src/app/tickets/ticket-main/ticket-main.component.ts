import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-main',
  templateUrl: './ticket-main.component.html',
  styleUrls: ['./ticket-main.component.css']
})
export class TicketMainComponent {
  title: string;


  constructor() {
    this.title = 'Ticket Controller';
  }

  ngOnInit(): void {
  }
}
