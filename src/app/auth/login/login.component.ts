import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:LoginForm={
    email:'',
    password:'',

  }

  ngOnInit(): void {
    
  }

  submit () {
      console.log(this.form);
      
  }

}
