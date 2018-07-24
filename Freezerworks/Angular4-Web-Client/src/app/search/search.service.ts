import { Injectable } from '@angular/core';
import { HttpClient,
         HttpErrorResponse,
         HttpHeaders,
         HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IResponse } from './../shared/interfaces/IResponse';
import { ISearchTabState } from './searchInterfaces/ISearchTabState';
import { ISearchTabs } from './searchInterfaces/ISearchTabs';

@Injectable()

export class SearchService {
  private _searchUrl = '';

  SearchTabState: ISearchTabState = {
    group: 0,
    filter: 1,
    logic: 2,
    null: 3
  }

  SearchTabs: ISearchTabs[] = [
    {title: 'Assign To Groups', toggleVar: this.SearchTabState.group},
    {title: 'Result Filters', toggleVar: this.SearchTabState.filter},
    {title: 'Logic', toggleVar: this.SearchTabState.logic}
  ]

  SearchTables: string[] = [
    'Patients',
    'Samples',
    'Aliquots',
    'Transactions',
    'Tests Ordered',
    'Test Results',
    'Shipping'
  ]

  constructor(private _http: HttpClient) {}

  getFields(): Observable<any> {
    const URL = 'http://127.0.0.1/API/v1/Fields/?properties=allowableEntries,multiSelectDropdown&limit=0';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ btoa('von:von')
      })
    };

    return this._http.get<IResponse>(URL, httpOptions)
      .map(res => {
        let fields: Array<any> = [];
        
        res.entities.forEach(field => {
          fields.push(field.properties);
        })

        return fields;
      })
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}