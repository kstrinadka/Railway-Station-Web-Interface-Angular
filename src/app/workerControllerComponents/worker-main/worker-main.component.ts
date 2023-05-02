import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {WorkerService} from "../service/worker/worker-service.service";
import {WorkerListComponent} from "../model/lists/worker-list/worker-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-worker-main',
  templateUrl: './worker-main.component.html',
  styleUrls: ['./worker-main.component.css']
})

// Будет содержать кнопки всех нужных запросов из контроллера на бэке
export class WorkerMainComponent implements OnInit{

  title: string;



  constructor(private formBuilder: FormBuilder,
              private workerService: WorkerService,
              private router: Router,
              //private workerList: WorkerListComponent
              ) {
    this.title = 'Worker Controller';
  }

  ngOnInit(): void {
  }

}
