import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DescriptionService} from './description.service';
import {SearchResultService} from '../search-result/search-result.service';
import {UpdateCartServiceService} from '../navbar/update-cart-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  tab_active: boolean = false;
  description_flag: string = "active";
  schema_flag: string = "";
  long_description: string;
  data_name: string;
  related_datasets_response : any[] = [];
  next_realted_dataset: number = 0;
  current_data_name: string;
  current_data_uri: string;
  current_data_description: string;
  number_of_items_in_cart: number;
  ui_alert_box: boolean = false;
  cart_count: any;
  dataset: any;
  dataset_list: any[]  = [];
  dataset_count: number = 0;
  cart_content: any[] = [];

  constructor(private _api_service: DescriptionService,
              private _get_description: SearchResultService,
              private  activateRoute: ActivatedRoute,
              private cart_service: UpdateCartServiceService) { }

  ngOnInit() {
    this.dataset = {name: "SRC_HLEE", short_description: "TEST 1",  long_description: "TEST 2"};
    this.dataset_count = 0;
    this.ui_alert_box = false;
    this.cart_service.currentMessage.subscribe(message => this.cart_content = message)
    this.next_realted_dataset = 0;
    this.tab_active = false;
    let selected_data_uri = this.activateRoute.snapshot.queryParams['selected_data_uri'];
    let selected_data_name = this.activateRoute.snapshot.queryParams['selected_data_name'];
    let short_description = this.activateRoute.snapshot.queryParams['short_description'];
    console.log("The related data sets corresponding to the data selected -");
    console.log(selected_data_uri);
    this.data_name = selected_data_name;

    this._get_description.getDescription([selected_data_uri], "long").subscribe(description =>{
      console.log(description.result);
      this.long_description = description.result[selected_data_uri];
    });

    this._api_service.getRelatedDatasets(selected_data_uri).subscribe( result => {
      console.log(result.result);

      for(let each_result in result.result){
        this.related_datasets_response.push([result.result[each_result]["data_name"]["value"], result.result[each_result]["data_uri"]["value"], result.result[each_result]["description"]["value"]]);

      }

      this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
      this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
      this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
      console.log("Realted Dataset response");
      console.log(this.related_datasets_response[0]);
      console.log(this.related_datasets_response);
    });



  }
  add_to_cart(data_name, long_description, short_description){
    this.ui_alert_box = true;
    this.dataset.name = data_name;
    this.dataset.long_description = long_description;
    this.dataset.short_description = short_description;
    this.dataset_list.push(this.dataset);
    this.dataset_count += 1;
    this.cart_content = [this.dataset_list, this.dataset_count];
    this.cart_service.changeMessage(this.cart_content);
  }
  close_alert_box() {
    this.ui_alert_box = false;
  }

  incrementNextRealatedDataset(){
    if(this.next_realted_dataset >= this.related_datasets_response.length-1){
      this.next_realted_dataset = 0;
      this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
      this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
      this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];

    }
    else{
      this.next_realted_dataset = this.next_realted_dataset +1;
      this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
      this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
      this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
    }
    return this.next_realted_dataset

  }
  decrementNextRelatedDataset(){
    if(this.next_realted_dataset <= 0){
      this.next_realted_dataset = this.related_datasets_response.length-1;
      this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
      this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
      this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];

    }
    else{
      this.next_realted_dataset = this.next_realted_dataset -1;
      this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
      this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
      this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
    }
    return this.next_realted_dataset

  }

  toggleActiveFlag(button_clicked){
    if(button_clicked === 'Description'){
      this.description_flag = "active";
      this.schema_flag = "";
    }else if(button_clicked === 'Schema and Data Preview'){
      this.schema_flag = "active";
      this.description_flag = "";
    }
  }
}

