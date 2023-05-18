import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from '../../service/worker/worker-service.service';
import {WorkerFront} from '../../model/dto/worker/worker';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {

  worker: WorkerFront;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workerService: WorkerService) {
    this.worker = new WorkerFront();
  }

  onSubmit() {
    this.workerService.saveWorker(this.worker).
    subscribe(result => this.gotoWorkerList());
  }

  gotoWorkerList() {
    this.router.navigate(['/workers']);
  }
}
