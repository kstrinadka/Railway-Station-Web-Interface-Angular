import { Component } from '@angular/core';


@Component({
  selector: 'app-flight-main',
  templateUrl: './flight-main.component.html',
  styleUrls: ['./flight-main.component.css']
})


export class FlightMainComponent {

  title: string;


  constructor() {
    this.title = 'Flight Controller';
  }

  ngOnInit(): void {
  }

}
