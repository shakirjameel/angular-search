import { Injectable } from '@angular/core';

import {Headers, Http} from '@angular/http';


@Injectable()
export class DescriptionService {

  constructor(private _http: Http) { }
  baseUrl: string = 'http://10.242.232.140:5000';

  getRelatedDatasets(fact_table){
    console.log("Related Data sets service accessed!");

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let related_datasets_api_payload = {"fact_name_uri": fact_table, "graph": "</PD_graph>"};
    console.log(related_datasets_api_payload);
    let response = this._http
      .post(`${this.baseUrl}/related`,
        related_datasets_api_payload,
        {headers: headers})
      .map(res => res.json());


    return response;
  }

}
