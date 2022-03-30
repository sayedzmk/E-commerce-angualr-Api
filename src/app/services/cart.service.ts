import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList:any=[];
  productList=new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>("");
  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }
  setproduct(product:any){
    this.cartList.push(...product);
    this.productList.next(product);
  }
  addcart(product){
    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList)

  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartList.map((a:any)=>{
      grandTotal += a.price ;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartList.splice(index,1);
      }
    })
    this.productList.next(this.cartList);
  }
  removeAllCart(){
    this.cartList = []
    this.productList.next(this.cartList);
  }
}
