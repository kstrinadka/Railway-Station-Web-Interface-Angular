import { Component, OnInit } from '@angular/core';
import { Worker } from '../../dto/worker/worker';
import {WorkerService} from "../../../service/worker/worker-service.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent{

  workers: Worker[];
  workersCount: number;
  sumSalary: number;
  avgSalary: number;



  constructor(private workerService: WorkerService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.workerService.findAll().subscribe(data => {
      //this.workers = data;
      //this.workersCount = data.length;
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.workerService.findAll().subscribe(data => {
      this.updateParameters(data)
    });
  }



  getByDepartmentForm(number: string) {
    let id;
    if (number == null || number.length == 0) {
      id = 1;
    }
    else {
      id = parseInt(number);
    }
    console.log(number);
    this.getByDepartment(id);

    // метод для вывода числа
    //alert(`Вы ввели: ${number}`); // здесь можно использовать number в компоненте
  }

  public getByDepartment(id: number): void {
    this.workerService.getByDepartment(id).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getByBrigadeIdForm(number: string) {
    let id;
    if (number == null || number.length == 0) {
      id = 1;
    }
    else {
      id = parseInt(number);
    }
    console.log(number);
    this.getByBrigadeId(id);
  }

  public getByBrigadeId(id: number): void {
    this.workerService.getByBrigadeId(id).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getBrigadeWorkersByLocomotiveForm(number: string) {
    let id;
    if (number == null || number.length == 0) {
      id = 1;
    }
    else {
      id = parseInt(number);
    }
    console.log(number);
    this.getBrigadeWorkersByLocomotive(id);
  }

  public getBrigadeWorkersByLocomotive(id: number): void {
    this.workerService.getBrigadeWorkersByLocomotive(id).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getLocomotiveDriversPassedMedExamInYearForm(number: string) {
    let id;
    if (number == null || number.length == 0) {
      id = 1;
    }
    else {
      id = parseInt(number);
    }
    console.log(number);
    this.getLocomotiveDriversPassedMedExamInYear(id);
  }

  public getLocomotiveDriversPassedMedExamInYear(year: number): void {
    this.workerService.getLocomotiveDriversPassedMedExamInYear(year).subscribe(data => {
      this.updateParameters(data)
    });
  }

  public getByWorkExperience(): void {
    this.workerService.getByWorkExperience().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getByGenderIdentityForm(gender: string) {
    this.getByGenderIdentity(gender);
  }

  public getByGenderIdentity(gender: string): void {
    this.workerService.getByGenderIdentity(gender).subscribe(data => {
      this.updateParameters(data)
    });
  }

  public getByChildrenCount(): void {
    this.workerService.getByChildrenCount().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getBySalary() {
    this.workerService.getBySalary().subscribe(data => {
      this.updateParameters(data)
    });
  }

  getLocomotiveDrivers() {
    this.workerService.getLocomotiveDrivers().subscribe(data => {
      this.updateParameters(data)
    });
  }

  private updateParameters(data: Worker[]): void {
    this.workers = data;
    this.workersCount = data.length;
    this.avgSalary = this.countAvgSalary(data);
    this.sumSalary = this.countSumSalary(data);
  }

  private countAvgSalary(data: Worker[]) {
    var sum:number = 0;
    for (let worker of data) {
      sum += parseInt(worker.salary);
    }
    return sum/this.workers.length;
  }

  private countSumSalary(data: Worker[]) {
    var sum:number = 0;
    for (let worker of data) {
      sum += parseInt(worker.salary);
    }
    return sum;
  }
}
