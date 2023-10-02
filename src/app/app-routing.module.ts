import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UserComponent } from './user/user.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:AdminComponent,
    path:'admin',
  },
  {
    component:AdminHomeComponent,
    path:'admin-home',
    canActivate:[AuthGuard],
  },
  {
    component:AdminAddBookComponent,
    path:'admin-add-book',
    canActivate:[AuthGuard],
  },
  {
    component:UpdateBookComponent,
    path:'update-book/:id',
    canActivate:[AuthGuard],
  },
  {
    component:BookDetailsComponent,
    path:'details/:id',
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:CartPageComponent,
    path:'cart-page'
  },
  {
    component:CheckoutComponent,
    path: 'checkout'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
