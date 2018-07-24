import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../shared/material.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { NavbarModule } from './../navbar/navbar.module';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    HomeRoutingModule,
    NavbarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
