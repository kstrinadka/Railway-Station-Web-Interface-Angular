import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Passenger} from "../model/dto/passenger";
import {PassengerService} from "../service/passenger.service";

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent {

  passenger: Passenger;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerService) {
    this.passenger = new Passenger();
  }

  onSubmit() {
    this.passengerService.savePassenger(this.passenger).subscribe(result => this.gotoPassengerList());
  }

  gotoPassengerList() {
    this.router.navigate(['/passengers']);
  }

}
