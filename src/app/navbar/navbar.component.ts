import { Component, OnInit } from '@angular/core';
import {UpdateCartServiceService} from './update-cart-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  badge_show: boolean = false;
  cart_content: any[] = [];
  cart_count: number = 0;

  constructor(private cart_service: UpdateCartServiceService,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.cart_service.currentMessage.subscribe(message => this.cart_content = message)
  }

  show_badge() {
    alert("badge");
    this.badge_show = true;
  }

  update_cart_counter(){

  }

  checkout() {
    console.log(this.cart_content);
    this.router.navigate(['/checkout'], {queryParams: {"cart_content": JSON.stringify(this.cart_content)}});
  }

}
