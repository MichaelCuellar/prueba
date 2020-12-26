import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CarShopServiceService} from '../api.services/car-shop-service.service';
import {CarShopDto} from '../commons/domain/carShopDto';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Output() back: EventEmitter<any> = new EventEmitter();
  carShop: CarShopDto[] = [];
  constructor(private apiServiceCarShop: CarShopServiceService, private confirmationService: ConfirmationService,
              private messageService: MessageService)
        { }

  ngOnInit(): void {
    this.apiServiceCarShop.getCarShop(sessionStorage.basic).subscribe(value => {
      this.carShop = value.carShopDtoS;
    });
  }

  deleteDetail(event): void{
    this.apiServiceCarShop.deleteDetailCar(event.idDetailCarShop).subscribe(() => {
      const index = this.carShop.indexOf(event);
      this.carShop.splice(index, 1);
    });
  }

  deleteCarShop(): void {
    this.confirmationService.confirm({
      message: 'Esta seguro de vaciar el carro de compras',
      accept: () => {
        this.apiServiceCarShop.deleteCarShop(this.carShop[0].idCarShop).subscribe(() => {});
        this.carShop = [];
      },
      reject: () => {
      }
    });
  }

  doShop(): void {
    this.confirmationService.confirm({
      message: 'Por favor confirme su compra por valor de:' + this.sumAll(),
      accept: () => {
        this.apiServiceCarShop.doingSale(sessionStorage.basic, this.carShop).subscribe(value => {
          if (value){
            this.back.emit(true);
          }else {
            this.messageService.add({severity: 'info', detail: 'No se pudo terminar el proceso de la compra, por favor contacte con alguno de nuestros asesores'});
          }
        });
      },
      reject: () => {
      }
    });
  }

  sumAll(): number {
    let sum = 0;
    if (this.carShop == null){
      return sum;
    }
    this.carShop.forEach(value => {
      sum = sum + (value.book.price * value.quantity);
    });
    return sum;
  }
}
