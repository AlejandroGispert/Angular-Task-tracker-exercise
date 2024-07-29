import { Component } from '@angular/core';
// import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  // standalone: true
  // imports: [RouterOutlet, HeaderComponent, TasksComponent, AppModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular-crash3';
}
