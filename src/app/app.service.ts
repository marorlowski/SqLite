import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {adresModel} from "./adresModel";
import 'rxjs/add/operator/toPromise';
import {environment} from "../environments/environment";
import {Observable} from 'rxjs';

@Injectable()
export class AppService {


  constructor(private http: Http) {
  }

  getAdres(): Promise<adresModel[]> {
    return this.http.get(environment.apiUrl + '/adres').toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);

  }

  getAdresObs(): Observable<adresModel[]> {
    return this.http.get(environment.apiUrl + '/adres')
      .map(response => response.json() )
      .catch(this.handleErrorObservable)
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
