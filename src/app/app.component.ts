import { Component } from '@angular/core';


/*selector – the HTML selector used to bind the component to the HTML template file
templateUrl – the HTML template file associated with the component
styleUrls – one or more CSS files associated with the component*/

@Component({
  selector: 'app-root',     //написано что это корневой компонент
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// видимо главный компонент
export class AppComponent {
  //title = 'angular-railway-client';

  // переменную передаем в html
  title: string;

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
