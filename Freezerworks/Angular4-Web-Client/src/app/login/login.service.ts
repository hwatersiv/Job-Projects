import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService {
  private _authenticateUrl: string = '/api/v1/authenticate';

  constructor(private _http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    let body = password + '&username=' + username;
    return this._http.get('http://127.0.0.1/api/v1/authenticate?password=' + body)
      .do(res => {
        //do something on 200 code other than send to front?
      })
      .catch(this.handleError)

    // for post stuff

    // return this._http.post('http://120.0.0.1/api/v1/authenticate', body)
    //   .do(res => {
    //     console.log("res: ", res);
    //   })
    //   .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}