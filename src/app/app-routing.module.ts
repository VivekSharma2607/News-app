import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussComponent } from './components/buss/buss.component';
import { EntertainComponent } from './components/entertain/entertain.component';
import { HeadingComponent } from './components/heading/heading.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportComponent } from './components/sport/sport.component';
import { TechComponent } from './components/tech/tech.component';
const routes: Routes = [
  {path: '' , component:HeadingComponent},
  {path: 'bussiness' , component:BussComponent},
  {path: 'sport' , component:SportComponent},
  {path: 'entertainment' , component:EntertainComponent},
  {path: 'science' , component:ScienceComponent},
  {path: 'health' ,component:HealthComponent},
  {path: 'tech' , component:TechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
