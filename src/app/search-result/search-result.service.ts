import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class SearchResultService {

  baseUrl: string = 'http://10.242.232.140:5000';
  constructor(private _http: Http) { }

  searchResult(queryList: Array<string>) {
    console.log("Search Result Service");
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data_result_payload = {"datasource_concept_list": queryList};
    let response = this._http
      .post(`http://10.242.232.140:8093/get_data`,
        data_result_payload,
        {headers: headers})
      .map(res => res.json());

    return response;
  }

  getDescription(data_list: Array<string>, description_type){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let description_payload = {"subject_list": data_list, "description_type": description_type, "graph":"</PD_graph>"};
    let response = this._http
      .post(`${this.baseUrl}/get_description`,
        description_payload,
        {headers: headers})
      .map(res => res.json());

    return response;
  }
}
