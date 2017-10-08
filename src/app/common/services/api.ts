import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
export {RequestMethod, Response} from '@angular/http';
import {CONFIG} from '../../../config';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  constructor(private http: Http) {

  }

  public request(path: string, method: RequestMethod = RequestMethod.Get, body?: Object, headers?: Object): Promise<Response> {
    let options = new RequestOptions({
      url: CONFIG.API_BASE + path,
      method: method,
      body: JSON.stringify(body),
      headers: new Headers(headers)
    });

    let request = new Request(options);

    return this.http.request(request).toPromise();
  }
}