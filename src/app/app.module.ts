import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookShopService } from './api.services/book-shop.service';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import { SaleComponent } from './sale/sale.component';
import { CarShopServiceService } from './api.services/car-shop-service.service';
import { HomeComponent } from './home/home.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SaleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CardModule,
    InputNumberModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule
  ],
  providers: [BookShopService,CarShopServiceService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
