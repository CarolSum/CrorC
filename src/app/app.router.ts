import { RouterModule, Routes } from '@angular/router';

import { FeelingsComponent } from './components/feelings/feelings.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { NewTechComponent } from './components/new-tech/new-tech.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'newcar', component: NewCarComponent, pathMatch: 'full' },
  { path: 'feelings', component: FeelingsComponent, pathMatch: 'full' },
  { path: 'newtech', component: NewTechComponent, pathMatch: 'full' }
];