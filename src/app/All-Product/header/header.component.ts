import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count;
  searchTerm !: string;
  constructor(private cartserv:CartService) {
    this.cartserv.getProduct().subscribe((item)=>{
      this.count=item.length;
    })
  }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartserv.search.next(this.searchTerm);
  }

}
