import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   loginObj: any = {
       userName: '',
       password: ''
   }
   constructor(
    private router: Router
   ){}
   onClick(){
    if(this.loginObj.userName == "admin" && this.loginObj.password == '12345'){
        this.router.navigateByUrl('/products');
    }
    else{
      alert('Wrong Credential')
    }
   }
}
