import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TrainFront} from "../model/dto/train";
import {TrainService} from "../service/train.service";

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.css']
})
export class TrainFormComponent {

  train: TrainFront;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trainService: TrainService) {
    this.train = new TrainFront();
  }

  onSubmit() {
    this.trainService.saveTrain(this.train).subscribe(
      train => {
        console.log('Train created:', train);
        this.gotoTrainsList();
      },
      error => {
        console.log('Error creating train:', error);
        this.error = 'Error creating train';
      }
    );
  }

  gotoTrainsList() {
    this.router.navigate(['/trains']);
  }
}
