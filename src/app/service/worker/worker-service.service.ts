import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Worker } from '../../model/worker/worker';
import { Observable } from 'rxjs';

@Injectable()
export class WorkerService {

  private workerUrl: string;

  constructor(private http: HttpClient) {
    this.workerUrl = 'http://localhost:8080/workers/all';
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workerUrl);
  }

  public save(worker: Worker) {
    return this.http.post<Worker>(this.workerUrl, worker);
  }
}
