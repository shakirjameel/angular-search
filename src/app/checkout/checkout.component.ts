import {Component, OnInit, ViewChild} from '@angular/core';

import { Popup } from 'ng2-opd-popup';
import { ProvisionToolService  } from './provision-tool.service';
import { ActivatedRoute } from '@angular/router';
import {UpdateCartServiceService} from '../navbar/update-cart-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  ui_alert_box: boolean;
  external_table_name: string;
  provisioning_data: boolean;
  provisioned_success: boolean;
  dataset_list: any[] = [];
  dataset_count: number = 0;
  cart_content: any[] = [];
  start_provisioning: boolean = false;
  radio_button_selection: boolean =false;
  deletion_after_provision: any[] = [];



  constructor(private popup: Popup,
              private cart_service: UpdateCartServiceService,
              private _api_service: ProvisionToolService,
              private activated_route: ActivatedRoute) { }

  ngOnInit() {
    this.ui_alert_box = false;
    this.provisioning_data = false;
    this.provisioned_success = false;
    this.radio_button_selection = false;
    this.dataset_list = JSON.parse(this.activated_route.snapshot.queryParams["cart_content"])[0];
    this.dataset_count = JSON.parse(this.activated_route.snapshot.queryParams["cart_content"])[1];
    //this.dataset_count = cart_content[1];
    console.log(this.dataset_list);
  }

  close_alert_box() {
    this.ui_alert_box = false;
  }
  toolSelected(tool_name){
    this.popup.options = {
      header: "Provisioning on Databricks",
      widthProsentage: 80, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "Confirm", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
    if(tool_name === 'Databricks'){
      this.popup.show();
    }else{
      console.log("Add some flash message here!");
      this.ui_alert_box = true;
    }
  }

  provisionData(){
    console.log(this.external_table_name);
    this.popup.hide();
    this.provisioning_data = true;
    this._api_service.createExternalTableDB(this.external_table_name).subscribe(result =>{
      console.log("Result from DB service");
      console.log(result);
      if(result.status === 'success'){
        this.provisioning_data = false;
        this.remove_from_list(this.deletion_after_provision);
        this.provisioned_success = true;
      }
    });
  }
  remove_from_list(dataset){
    this.dataset_list.splice( this.dataset_list.indexOf(dataset), 1 );
    console.log(this.dataset_list);
    this.dataset_count-=1;
    this.cart_service.changeMessage([this.dataset_list, this.dataset_count]);
  }

  successAlertClose(){
    this.provisioned_success = true;
  }


  radioButtonClicked(dataset){
    this.radio_button_selection = true;
    this.deletion_after_provision = dataset;
  }
}
