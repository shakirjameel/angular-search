import {Component, OnInit} from '@angular/core';

import {SearchService} from './search.service';
import {FormControl} from '@angular/forms';

import {Router} from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  data: any[] = [];
  highlights: any[] =[];
  complete_dimension_list: any[] =[];
  queryField: FormControl = new FormControl();
  datasource_concept_list: any[] = [];
  result_list: any[] = [];
  result: any[] = [];

  constructor(private _apiService: SearchService,
              private router: Router) {}

  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap((query) => this._apiService.search(query))
      .subscribe(result => {
        console.log("This is the result from the API");
        console.log(result);
        if (result.status === 400) {
          return;
        } else {
          this.result_list = [];

          console.log(this.result_list);
          console.log(result.result);
          this.result = result.result;
          for(let single_result of result.result){

            console.log("single result");
            console.log(single_result);
            console.log(single_result.highlight);
            //single_result.highlight = JSON.parse(single_result.highlight);
            let highlighted_data = JSON.parse(single_result.highlight);
            let doc_data = JSON.parse(single_result.data);

            // pushing all the dimensions in a consolidated list that can be used when the user selects a concept
            this.complete_dimension_list.push(doc_data.dimension);
            console.log("The complete dimension list is - ");
            console.log(this.complete_dimension_list);
            console.log("highlighted Data");
            console.log(highlighted_data);

            for(let highlight of Object.keys(highlighted_data)){
              console.log("highlight");
              console.log(highlight);

              // if logic for mapping then push it to list that will be iterated in the html
              if(highlight === "concept_tags.ngram") {
                let narrower_suggestion = highlighted_data[highlight];
                let broader_suggestion = doc_data["concept"];
                this.result_list.push(narrower_suggestion.map(e => {
                  let narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                  return ["concept_tags", narrower_search , e + " in " + broader_suggestion]
                }));

              }if(highlight === "dimension_tags.ngram"){
                let narrower_suggestion = highlighted_data[highlight];
                let broader_suggestion = doc_data["datasource"];
                this.result_list.push(narrower_suggestion.map(e => {
                  let narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                  return ["dimension_tags", narrower_search , e +" in "+ broader_suggestion]
                }));

              }if(highlight === "datasource_tags.ngram"){
                let narrower_suggestion = highlighted_data[highlight];
                let broader_suggestion = doc_data["concept"];
                this.result_list.push(narrower_suggestion.map(e => {
                  let narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                  return ["datasource_tags", narrower_search , e +" in "+ broader_suggestion]
                }));

              }if(highlight === "concept.ngram"){
                let narrower_search = highlighted_data[highlight].toString().replace(/<\/?[^>]+(>|$)/g, '');
                this.result_list.push("concept", narrower_search , highlighted_data[highlight]);
            }
          }
          console.log("this.result_list - ");
          console.log(this.result_list);
          // this.data = result.result.map(x => JSON.parse(x.data));
          // this.highlights = result.result.map(x => JSON.parse(x.highlight));
          // console.log(this.data);
          // console.log(this.highlights);
        }
      }
      });
  }
  selectedSuggestion(search_selection){
      console.log("The search selection is below - ");
      console.log(search_selection);
      // console.log("The result doc needs to change, meanwhile we would be using the first entry of the resultDoc.tags which is " +
      //   "(Also we would have to loop through the docs to create the list) -");
      //console.log(resultDoc.tags[0]);
      let tag_highlight = search_selection[0];

      //HERE
      let narrower_search = search_selection[1];

      for(let single_result of this.result){
        console.log('inside the loop of selected suggestion');
        console.log(single_result);
        let data_obj = JSON.parse(single_result.data);
        console.log("The tag_highlight content is -");
        console.log(data_obj[tag_highlight]);
        if(typeof(data_obj[tag_highlight]) === 'object'){
          console.log("Important check, the tag_highlight content is of the type OBJECT");
          if(data_obj[tag_highlight].includes(narrower_search)){
            console.log("Found the narrower search in the document, pushing the dimension in the datasource_concept_list");
            this.datasource_concept_list.push(data_obj.dimension);
          }
        }else{
          console.log("Important check, the tag_highlight content is of the type STRING");
          if(data_obj[tag_highlight] === narrower_search){
            console.log("Found the narrower search in the document, pushing the dimension in the datasource_concept_list");
            this.datasource_concept_list.push(data_obj.dimension);
          }
        }

        // if(single_result._id === search_selection[0]){
        //   console.log("There is a match for -");
        //   let data = JSON.parse(single_result.data);
        //   console.log(data.dimension);
        //   this.datasource_concept_list.push(data.dimension);

        // let search_result_payload = {
        //   datasource_concept_list: this.datasource_concept_list,
        //   search_selection: search_selection
        // };
        // this.router.navigate(['/search-result'], {queryParams:search_result_payload});

      }

      console.log("Looping complete, below is the complete datasource concept list -");
      console.log(this.datasource_concept_list);

      let search_result_payload = {
        datasource_concept_list: this.datasource_concept_list,
        search_selection: search_selection[2]
      };
      this.router.navigate(['/search-result'], {queryParams:search_result_payload});
      // for(let dimension in resultDoc.dimension){
      //   this.datasource_concept_list.push(dimension);
      // }
      // console.log(this.datasource_concept_list);
      // let search_result_payload = {
      //   datasource_concept_list: this.datasource_concept_list,
      //   search_query: resultDoc.concept
      // };
      // this.router.navigate(['/search-result'], {queryParams:search_result_payload});
  }

}
