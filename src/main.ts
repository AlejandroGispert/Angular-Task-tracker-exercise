import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient, withFetch } from '@angular/common/http';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
