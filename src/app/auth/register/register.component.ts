import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/reg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form:RegisterForm = {
    email:'',
    password:'',
    confirm_password:'',
  }

submit() {
  console.log(this.form);
  
}


}
