import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flash_message:  FlashMessagesService,
              private activated_route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  userAccount(){
    this.flash_message.show('This feature is currently disabled for this demo!', {cssClass: 'alert-danger', timeout: 2000})
  }

  checkOut(){
    let some_data = {
      "some_data": "some_value"
    };
    this.router.navigate(['/checkout'], {queryParams: some_data});
  }
}
