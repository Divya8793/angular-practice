import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ForgotUsernameModel } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  constructor(private http: HttpClient) {}

  serverUrl = 'https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json';

  getServiceCall() {
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = this.serverUrl;
    // return this.http.get(url, {headers}).pipe(
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }


postServiceCall(forgetUsernameDetails: ForgotUsernameModel){
  // const headers = new HttpHeaders({'Content-Type': 'application/json'});
  const url = this.serverUrl;
  // return this.http.post(url, {headers}).pipe(
  return this.http.post(url, forgetUsernameDetails).pipe(
    map((res) => {
      return res;
    })
  );
}
}
