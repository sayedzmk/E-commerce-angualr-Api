import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  alldata:any=[];
  isReadMore = true
  filterCategory ;
  searchKey:string ="";
    constructor(private api:APIServiceService ,private cartServ:CartService) { 
    this.api.get().subscribe((data:any)=>{
      this.alldata=data;
    });
    this.alldata.forEach((a) => {
      if(a.category ==="women's clothing" || a.category ==="men's clothing"){
        a.category ="fashion"
      }
      Object.assign(a,{quantity:1,total:a.price});
    });
    this.cartServ.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  ngOnInit(): void {
  }
  showText() {
    this.isReadMore = !this.isReadMore
  }
  addCart(data){
    this.cartServ.addcart(data);
  }
  filter(category:string){
    this.filterCategory = this.alldata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    }
    )}

}
