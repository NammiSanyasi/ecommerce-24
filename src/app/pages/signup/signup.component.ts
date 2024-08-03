import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authservice:AuthService,private router:Router){}
  submit(email:any, password:any, form:any) {
    console.log(email, password, form)
    if ((email.control.value.trim() == '') || (password.control.value.trim() == '')) {
      alert("please fill the form")
      form.reset();
    }
    else {
      this.authservice.signup(email.control.value, password.control.value)
        .then((val:any) => {
          console.log(val);
          alert("successfully signup it.")
          //this.router.navigate(['/login'])
        })
      .catch((err:any)=>console.log(err))}
      form.reset();
   }
   navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
