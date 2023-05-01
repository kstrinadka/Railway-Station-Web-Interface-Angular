import { Component, OnInit } from '@angular/core';
import { Worker } from '../../model/worker/worker';
import {WorkerService} from "../../service/worker/worker-service.service";

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  workers: Worker[];

  constructor(private workerService: WorkerService) {
  }

  ngOnInit() {
    this.workerService.findAll().subscribe(data => {
      this.workers = data;
    });
  }
}
