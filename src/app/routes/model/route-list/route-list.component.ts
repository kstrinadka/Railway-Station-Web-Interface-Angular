import { Component } from '@angular/core';
import {Route} from "../dto/route";
import {RouteService} from "../../service/route.service";

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent {

  routes: Route[];
  routesCount: number;


  constructor(private routeService: RouteService) {
  }

  // использовать встроенный метод по считыванию числа со строки

  ngOnInit() {
    this.routeService.findAll().subscribe(data => {
      this.updateParameters(data);
    });
  }

  public findAll(): void {
    this.routeService.findAll().subscribe(data => {
      this.updateParameters(data)
    });
  }



  /**
   *  конвертирует строку в число
   */
  private convertStringToNumber(input: string) {
    console.log(input);
    var numberValue: number;

    if (!input) return 0;

    if(!isNaN(Number(input))){
      numberValue = Number(input);
      return numberValue;
    }

    if (input.trim().length==0) {
      return 0;
    }
    return Number(input);
  }

  /**
   *  обновляет список рейсов на сайте
   */
  private updateParameters(data: Route[]): void {
    this.routes = data;
    this.routesCount = data.length;
  }

  getAllRoutesByCategory(category: string) {
    this.routeService.getAllRoutesByCategory(category).subscribe(data => {
      this.updateParameters(data)
    });
  }

  getAllRoutesByDirection(direction: string) {
    this.routeService.getAllRoutesByDirection(direction).subscribe(data => {
      this.updateParameters(data)
    });
  }
}
