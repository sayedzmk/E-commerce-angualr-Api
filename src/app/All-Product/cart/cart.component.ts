import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  totalprice !:number;
  constructor(private cartserv:CartService) { 
    this.cartserv.getProduct().subscribe((data)=>{
      this.products=data;
      this.totalprice=this.cartserv.getTotalPrice();
      console.log(this.totalprice);
    })

  }

  ngOnInit(): void {
  }
  removeItem(item){
    this.cartserv.removeCartItem(item);
  }
  removeAllItem(){
    this.cartserv.removeAllCart();
  }
}
