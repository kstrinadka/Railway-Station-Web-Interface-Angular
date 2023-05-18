import { Component } from '@angular/core';

@Component({
  selector: 'app-train-main',
  templateUrl: './train-main.component.html',
  styleUrls: ['./train-main.component.css']
})
export class TrainMainComponent {

  title: string;


  constructor() {
    this.title = 'Train Controller';
  }

  ngOnInit(): void {
  }
}
