import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Route} from "../model/dto/route";
import {RouteService} from "../service/route.service";

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent {

  routeDto: Route;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeService: RouteService) {
    this.routeDto = new Route();
  }

  onSubmit() {
    this.routeService.saveRoutes(this.routeDto).subscribe(result => this.gotoRoutesList());
  }

  gotoRoutesList() {
    this.router.navigate(['/routes']);
  }
}
