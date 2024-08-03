import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductComponent } from './pages/product/product.component';
import { dashboardGuard } from './dashboard.guard';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'product/:id', component:ProductComponent},
  { path: 'cart', component:CartComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: '**', component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
