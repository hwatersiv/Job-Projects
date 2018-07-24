import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../shared/material.module';
import { SearchRoutingModule } from './search-routing.module';

import { SearchNewComponent } from './searchNew/searchNew.component';
import { NavbarModule } from './../navbar/navbar.module';
import { SearchService } from './search.service';
import { FieldSelectDialogComponent } from './field-select-dialog/field-select-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    SearchRoutingModule,
    NavbarModule
  ],
  declarations: [
    SearchNewComponent,
    FieldSelectDialogComponent
  ],
  providers:[
    SearchService
  ],
  entryComponents: [
    FieldSelectDialogComponent
  ]
})
export class SearchModule { }
