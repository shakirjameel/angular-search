import {Component, OnInit, ViewChild} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Popup } from 'ng2-opd-popup';
import { ProvisionToolService  } from './provision-tool.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  external_table_name: string;
  provisioning_data: boolean;
  provisioned_success: boolean;



  constructor(private flash_message:  FlashMessagesService,
              private popup: Popup,
              private _api_service: ProvisionToolService) { }

  ngOnInit() {
    this.provisioning_data = false;
    this.provisioned_success = false;
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
      this.flash_message.show('This tool is not configured for this demo!',{cssClass: 'alert-danger', timeout: 2000})
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
        this.provisioned_success = true;
      }
    });
  }

  successAlertClose(){
    this.provisioned_success = true;
  }



}
