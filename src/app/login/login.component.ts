import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm){
    let email = form.value.email;
    let pass = form.value.password;
    if(this.noVoid(email,pass)){
      console.log(form.value);
    }else{
      console.log("campos vacios");
    }
    
  }



  noVoid(email: String, pass: String): boolean{
    let isVoid: boolean = true;
    if(email === "" || pass === ""){
      isVoid = false;
    }
    return isVoid;
  }

}
