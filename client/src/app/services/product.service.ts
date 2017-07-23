import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

//product class 
class Product {
  name: string
}

@Injectable()

export class ProductService {

  constructor(
    private http: Http
  ) { }

  fetch( productUrl : string): Observable<any> {

    let uri = encodeURIComponent(productUrl);
    let url = '/parse?url=' + uri;

  return this.http.get(url)
           .map((res:Response) => res.json() as Product[])
           .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('Http Error', error);
    return Observable.throw(error);
  }
}
