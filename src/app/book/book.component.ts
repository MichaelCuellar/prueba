import { Component, OnInit } from '@angular/core';
import {BookShopService} from '../api.services/book-shop.service';
import {BookDto} from '../commons/domain/bookDto';
import {Router} from '@angular/router';
import {SaleBookDto} from '../commons/domain/saleBookDto';
import {CarShopServiceService} from '../api.services/car-shop-service.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: BookDto[];
  saleBooks: SaleBookDto[] = [];
  selectBook: SaleBookDto = new SaleBookDto();
  constructor(private apiService: BookShopService,
              private route: Router, private apiServiceCarShop: CarShopServiceService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    if (sessionStorage.basic){
      this.apiService.getIndex().subscribe( value => this.books = value);
    }else{
      this.route.navigate(['']).then();
    }
  }

  saveData(i: number, book: BookDto): void {
    const element: any = document.getElementById('user' + i);
    const quantity = element.value;
    this.selectBook.book = book;
    this.selectBook.quantity = quantity;
    this.apiServiceCarShop.addCarShop(sessionStorage.basic, this.selectBook).subscribe(() => {
      this.messageService.add({severity: 'success', detail: 'Libro agregado/actualizado en el carro'});
    });
  }

}
