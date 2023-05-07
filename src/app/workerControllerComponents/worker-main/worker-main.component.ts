import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-worker-main',
  templateUrl: './worker-main.component.html',
  styleUrls: ['./worker-main.component.css']
})

// Будет содержать кнопки всех нужных запросов из контроллера на бэке
export class WorkerMainComponent implements OnInit{

  title: string;


  constructor() {
    this.title = 'Worker Controller';
  }

  ngOnInit(): void {
  }

}
