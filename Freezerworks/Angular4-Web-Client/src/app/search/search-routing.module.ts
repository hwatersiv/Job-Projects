import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchNewComponent } from './searchNew/searchNew.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'search/new', component: SearchNewComponent},
    ])
  ],
  exports: [RouterModule]
})

export class SearchRoutingModule { }