import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  baseUrl: string = 'http://10.242.232.140:5000';

  constructor(private _http: Http) {
  }

  search(queryString: string) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let suggestion_api_payload = {"input_characters": queryString};
    let response = this._http
      .post(`${this.baseUrl}/get_suggestion`,
        suggestion_api_payload,
        {headers: headers})
      .map(res => res.json());

    return response;
  }
}
