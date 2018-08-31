import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authorization } from '../../models/authorization';
import { Order } from '../../models/order';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {

  constructor(public http: HttpClient) {
  }

  url_api = 'http://api.pandeco.com.br/api/v1/';
  endpoint = 'orders';

  addOrder(authorization: Authorization, order: Order): Observable<Order> {
    let data = {
      price: order.price,
      observation: order.observation,
      receive_at: order.receive_at,
      company_id: order.company_id,
      deliver: order.deliver,
      status_id: 1,
      form_payment_id: order.form_payment_id,
      products_ids: order.products_ids,
      additionals_ids: order.additionals_ids,
      location_id: order.location_id
    };
    return this.http.post<Order>(this.url_api + this.endpoint, data,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authorization.access_token,
        'Content-Type': 'application/json'
      }
    });
  }
}
