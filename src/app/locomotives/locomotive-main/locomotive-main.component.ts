import { Component } from '@angular/core';

@Component({
  selector: 'app-locomotive-main',
  templateUrl: './locomotive-main.component.html',
  styleUrls: ['./locomotive-main.component.css']
})
export class LocomotiveMainComponent {

  title: string;


  constructor() {
    this.title = 'Locomotive Controller';
  }

  ngOnInit(): void {
  }

}
