import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { NewTechComponent } from './components/new-tech/new-tech.component';
import { FeelingsComponent } from './components/feelings/feelings.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,
    NewCarComponent,
    NewTechComponent,
    FeelingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
