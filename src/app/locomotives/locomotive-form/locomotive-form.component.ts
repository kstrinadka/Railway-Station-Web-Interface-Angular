import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Locomotive} from "../model/dto/locomotive";
import {LocomotiveService} from "../service/locomotive.service";

@Component({
  selector: 'app-locomotive-form',
  templateUrl: './locomotive-form.component.html',
  styleUrls: ['./locomotive-form.component.css']
})
export class LocomotiveFormComponent {

  locomotive: Locomotive;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locomotiveService: LocomotiveService) {
    this.locomotive = new Locomotive();
  }

  onSubmit() {
    this.locomotiveService.saveLocomotive(this.locomotive).subscribe(result => this.gotoLocomotiveList());
  }

  gotoLocomotiveList() {
    this.router.navigate(['/locomotives']);
  }

}
