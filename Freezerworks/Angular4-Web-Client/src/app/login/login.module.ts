import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from './../shared/material.module';
import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
  exports: []
})
export class LoginModule { }
