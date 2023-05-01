import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from '../../service/worker/worker-service.service';
import { Worker } from '../../model/worker/worker';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {

  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workerService: WorkerService) {
    this.worker = new Worker();
  }

  onSubmit() {
    this.workerService.save(this.worker).subscribe(result => this.gotoWorkerList());
  }

  gotoWorkerList() {
    this.router.navigate(['/workers']);
  }
}
