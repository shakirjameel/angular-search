import { Injectable } from '@angular/core';

import {Headers, Http} from '@angular/http';
@Injectable()
export class ProvisionToolService {

  baseUrl: string = 'http://10.204.40.192:8090';
  constructor(private _http: Http) { }

  createExternalTableDB(table_name){
    const headers = new Headers();
    console.log("Create External Table on DB accessed");
    headers.append('Content-Type', 'application/json');
    let suggestion_api_payload = {'tablename': table_name};
    console.log(suggestion_api_payload);
    let response = this._http
      .post(`${this.baseUrl}/create_table`,
        suggestion_api_payload,
        {headers: headers})
      .map(res => res.json());
    console.log(response);
    return response;
  }

}
