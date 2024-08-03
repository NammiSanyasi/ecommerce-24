import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AboutComponent,
    CartComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    ProductComponent,
    ProductsComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
