import { Component } from '@angular/core';

@Component({
  selector: 'app-passenger-main',
  templateUrl: './passenger-main.component.html',
  styleUrls: ['./passenger-main.component.css']
})
export class PassengerMainComponent {

  title: string;


  constructor() {
    this.title = 'Passenger Controller';
  }

  ngOnInit(): void {
  }
}
