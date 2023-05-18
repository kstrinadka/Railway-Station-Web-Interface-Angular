import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FlightFront} from "../../model/dto/flight/flight";
import {FlightService} from "../../service/flight/flight.service";

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {



  flight: FlightFront;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService) {
    this.flight = new FlightFront();
  }

  onSubmit() {
    this.flightService.saveFlight(this.flight).subscribe(result => this.gotoFlightList());
  }

  gotoFlightList() {
    this.router.navigate(['/flights']);
  }

}
