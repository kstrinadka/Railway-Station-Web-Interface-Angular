import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './lists/user-list/user-list.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import {WorkerListComponent} from "./workerControllerComponents/model/lists/worker-list/worker-list.component";
import {WorkerFormComponent} from "./workerControllerComponents/forms/worker-form/worker-form.component";
import {WorkerMainComponent} from "./workerControllerComponents/worker-main/worker-main.component";
import {AppComponent} from "./app.component";
import {
  AdministratorsListComponent
} from "./workerControllerComponents/model/lists/administrators-list/administrators-list.component";
import {
  AdministratorFormComponent
} from "./workerControllerComponents/forms/administrator-form/administrator-form.component";

// связывание адреса и компонента
const routes: Routes = [
  { path: 'main', component: AppComponent },
  { path: 'workercontroller', component: WorkerMainComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'workers', component: WorkerListComponent },
  { path: 'addworker', component: WorkerFormComponent },
  { path: 'administrators', component: AdministratorsListComponent },
  { path: 'addadministrator', component: AdministratorFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
