import { Component, OnInit } from '@angular/core';
import {BookShopService} from "../api.services/book-shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boutique = true;
  display = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  shoppingCart(): void{
    this.boutique = false;
  }

  backPages($event: any): void{
    this.boutique = true;
    this.display = true;
  }

  closeSession(): void {
    this.route.navigate(['']).then(r => {
      sessionStorage.clear();
    });
  }
}
