import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResultService} from './search-result.service';
import {HierarchyService} from './hierarchy.service';
import {DOCUMENT} from '@angular/platform-browser';
import {window} from 'rxjs/operators';

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {

  datasource_concept_list: string[];
  searchResult: string;
  results: any[] = [];
  results_arrays: any[] = [];
  HierarchyHtml;
  counter: number;
  data_list: any[] = [];
  hierarchy_list: any[] = [["Parent Concept"], ["Child Concept", "Parallel Child Concept"], ["Final Concept"]];
  private visited: Object = {};
  private parentMap: Object = {};

  constructor(@Inject(DOCUMENT) private document: any,
              private activateRoute: ActivatedRoute,
              private _api_service: SearchResultService,
              private _hierarchy_service: HierarchyService,
              private router: Router) {
  }

  private renderTree(graph: Object, root: string) {
    let html = "<ul>";
    for (let child of graph[root]) {
      console.log(`### ${child}`);
      html += "<li class='hierarchy-item'>" + child;
      html += this.renderTree(graph, child);
      html += "</li>";
    }
    html += "</ul>";
    return html;
  }

  ngOnInit() {
    console.log("initialize counter as zero");
    this.counter = 0;
    let datasource_concept_list_str = this.activateRoute.snapshot.queryParams['datasource_concept_list'];
    let search_selection = this.activateRoute.snapshot.queryParams['search_selection'];

    console.log(datasource_concept_list_str);
    console.log("The search selection -");
    console.log(search_selection);
    this.searchResult = search_selection;

    this.datasource_concept_list = datasource_concept_list_str.split(",");
    console.log(this.datasource_concept_list);

    this._api_service.searchResult(this.datasource_concept_list)
      .subscribe(result => {
        if (result.status === "success") {
          console.log("Service gave a success response!");
          console.log(Object.keys(result["result"]).length);
          console.log(Object.keys(this.datasource_concept_list).length);
          for (let i = 0; i < Object.keys(this.datasource_concept_list).length; i++) {
            this.results[this.datasource_concept_list[i]] = result.result[this.datasource_concept_list[i]];
          }
          console.log("The value in this.results -");
          console.log(this.results);
          //console.log(this.results["Equipment"]["fact_table_list"]);
          console.log(this.datasource_concept_list);
          for (result in this.results) {
            console.log(result);
            this.results_arrays.push([result, this.results[result]['fact_table_list'], 'fact_table']);
            this.results_arrays.push([result, this.results[result]['document_list'], 'document']);
            this.results_arrays.push([result, this.results[result]['public_ontology'], 'public_ontology']);
          }
          console.log("The value in the results_array -");
          console.log(this.results_arrays);
          // let data_list = ["http://www.example.org/hlee/equipment/PD_WRK/SRC_HLEE_EQUIPMENT_INFO"];
          // this._api_service.getDescription(data_list,"short").subscribe(desc_result => {
          //   console.log("INNER SUBSCRIBE, CHECK!");
          //   console.log(desc_result);
          //
          // });
          //create this.results array here

        } else {
          console.log(result.status);
          console.log("service gave a bad response");
          console.log(result);
        }

      });

    let search_term = this.searchResult.split("in")[0].toString().replace(/<\/?[^>]+(>|$)/g, '');
    console.log("Search Term is - ");
    console.log(search_term);
    this._hierarchy_service.fetchHierarchy(search_term).subscribe(result => {
      console.log("Result from the hierarchy service - ");
      let res = result.result;
      console.log(res);
      let sub_graph = res.hierarchy;
      let roots = res.roots;
      console.log(`++++ ${roots}`);
      for (let node in sub_graph) {
        this.visited[node] = false;
        this.parentMap[node] = [];
      }
      // this.dfs(sub_graph, "Process development");
      this.HierarchyHtml = roots.map(x => `<ul> <li class="hierarchy-item"> ${x} </li>` + this.renderTree(sub_graph, x));
      console.log(this.HierarchyHtml);
    });
  }

  selectedData(data, type_of_data) {
    console.log("Selected data is -");
    console.log(data);
    console.log(type_of_data);
    if (type_of_data === "document") {
      console.log("The type of data selected is a document!");
      this.document.location.assign(data[0]);
    } else if (type_of_data === "public_ontology") {
      console.log("The type of data selected is a public ontology");
      this.document.location.assign(data[0]);
    } else {
      let related_dataset_payload = {
        "selected_data_uri": data[0],
        "selected_data_name": data[1],
        "short_description": data[2]
      };
      this.router.navigate(['/description'], {queryParams: related_dataset_payload});
    }
  }

}



