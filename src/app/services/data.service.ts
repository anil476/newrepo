import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
   private apiUrl = 'http://localhost/multi-database/public/api/user';
  constructor(public http:Http) {
    console.log('data service connected');
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json());
  }
  postUserWithPromise(user:Object): Promise<Object>{
    let headers      = new Headers({ 'Content-Type': 'application/json'});
    let options       = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl, user, options).toPromise()
	           .then(this.extractData)
                   .catch(this.handleErrorPromise);

  }
  postUserWithObservable(user:Object): Observable<Object> {
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this.http.post(this.apiUrl, user, options)
                  .map(this.extractData)
                  .catch(this.handleErrorObservable);
   }

  private extractData(res: Response) {
	    let body = res.json();
      console.log("below is the extracted data");
      console.log(body);
        return body || {};
    }

    private handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
   }

    private handleErrorPromise (error: Response | any) {
	     console.error(error.message || error);
	      return Promise.reject(error.message || error);
    }

  // login (body: Object): Promise<Object> {
  //
  //      let headers      = new Headers({ 'Content-Type': 'application/json' });
  //      let options       = new RequestOptions({ headers: headers });
  //
  //      return this.http.post(this.apiUrl, body, options).toPromise()
  //                       .then(res => res.json().user)
  //                       .catch(this.handleError);
  //  }

}
