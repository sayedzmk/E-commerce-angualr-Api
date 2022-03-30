import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './All-Product/cart/cart.component';
import { ProductsComponent } from './All-Product/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product',component:ProductsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
