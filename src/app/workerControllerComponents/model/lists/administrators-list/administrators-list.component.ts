import { Component } from '@angular/core';
import {Worker} from "../../dto/worker/worker";
import {WorkerService} from "../../../service/worker/worker-service.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Administrator} from "../../dto/administrator/administrator";

@Component({
  selector: 'app-administrators-list',
  templateUrl: './administrators-list.component.html',
  styleUrls: ['./administrators-list.component.css']
})
export class AdministratorsListComponent {

  admins: Administrator[];
  adminsCount: number;


  constructor(private workerService: WorkerService) {
  }


  ngOnInit() {
    this.workerService.getAdministration().subscribe(data => {
      this.admins = data;
      this.adminsCount = data.length;
    });
  }


}
