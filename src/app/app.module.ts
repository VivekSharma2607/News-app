import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';

import {HttpClientModule} from '@angular/common/http'
import { NewapiService } from './services/newapi.service';
import { BussComponent } from './components/buss/buss.component';
import { SportComponent } from './components/sport/sport.component';
import { EntertainComponent } from './components/entertain/entertain.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { TechComponent } from './components/tech/tech.component'
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    BussComponent,
    SportComponent,
    EntertainComponent,
    ScienceComponent,
    HealthComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
