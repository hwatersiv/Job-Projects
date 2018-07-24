import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../shared/material.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
