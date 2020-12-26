import { Component, OnInit } from '@angular/core';
import {BookShopService} from '../api.services/book-shop.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'tienda-harry';
  userID: number;
  password: string;

  constructor(private apiService: BookShopService, private route: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const user: string = this.userID + ':' + this.password;
    const encodedSer = btoa(user);
    this.apiService.getLogin(encodedSer).subscribe( value => {
      if (value){
        this.route.navigate(['home']).then(r => {
          sessionStorage.basic = encodedSer;
        });
      }
    });
  }
}
