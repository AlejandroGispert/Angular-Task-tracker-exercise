import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';

import { FooterComponent } from './components/footer/footer.component';
// import { SharedModule } from './shared.module';
// import { HeaderModule } from './components/header/header.module';

import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    // HeaderModule,
    HttpClientModule,
    // SharedModule,
  ],
  bootstrap: [AppComponent],

  exports: [],
})
export class AppModule {}
