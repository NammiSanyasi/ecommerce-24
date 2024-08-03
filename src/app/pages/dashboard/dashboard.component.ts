import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  cartItems: any[] = [];

  constructor(private auth:AuthService,private api:ApiService)
  {
    this.api.cartItemsSubObs.subscribe((data)=>{console.log(data);
    this.cartItems = data;})
  }
  logout()
  {
    this.auth.logout()
  }

}
