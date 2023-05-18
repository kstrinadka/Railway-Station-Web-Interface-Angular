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
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeService: RouteService) {
    this.routeDto = new Route();
  }

  onSubmit() {
    this.routeService.saveRoute(this.routeDto).subscribe(
      route => {
        console.log('Route created:', route);
        this.gotoRoutesList();
      },
      error => {
        console.log('Error creating route:', error);
        this.error = 'Error creating route';
      }
    );
  }

  gotoRoutesList() {
    this.router.navigate(['/routes']);
  }
}
