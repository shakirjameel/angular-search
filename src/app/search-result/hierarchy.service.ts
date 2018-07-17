import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class HierarchyService {

  baseUrl: string = 'http://10.242.232.140:5000';

  constructor(private _http: Http) {
  }

  fetchHierarchy(interest) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let suggestion_api_payload = {'interest': interest.trim()};
    console.log(suggestion_api_payload);
    let response = this._http
      .post(`${this.baseUrl}/get_hierarchy`,
        suggestion_api_payload,
        {headers: headers})
      .map(res => res.json());
    return response;
  }
}
