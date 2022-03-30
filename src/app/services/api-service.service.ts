import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  urlApi="https://fakestoreapi.com/products/";

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.urlApi);
  }
}
