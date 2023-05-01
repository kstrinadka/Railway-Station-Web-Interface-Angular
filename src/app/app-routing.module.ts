import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './lists/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import {WorkerListComponent} from "./lists/worker-list/worker-list.component";
import {WorkerFormComponent} from "./forms/worker-form/worker-form.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'addworker', component: WorkerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
