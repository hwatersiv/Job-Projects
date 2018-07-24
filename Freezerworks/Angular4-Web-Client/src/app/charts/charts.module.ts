import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../shared/material.module';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    ChartsRoutingModule,
    // ChartsModule,
  ],
  declarations: [ChartsComponent],
})
export class ChartModule { }
