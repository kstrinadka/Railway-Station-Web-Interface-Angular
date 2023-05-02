import { Component } from '@angular/core';
import {Worker} from "../../model/dto/worker/worker";
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerService} from "../../service/worker/worker-service.service";
import {Administrator} from "../../model/dto/administrator/administrator";

@Component({
  selector: 'app-administrator-form',
  templateUrl: './administrator-form.component.html',
  styleUrls: ['./administrator-form.component.css']
})
export class AdministratorFormComponent {

  admin: Administrator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workerService: WorkerService) {
    this.admin = new Administrator();
  }

  onSubmit() {
    this.workerService.saveAdmin(this.admin).subscribe(result => this.gotoWorkerList());
  }

  gotoWorkerList() {
    this.router.navigate(['/administrators']);
  }

}
