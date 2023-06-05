import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

      this.loginForm=this.formbuilder.group({
        
        email:[''],
        password:['']

      })
  }

  logIn() {

    this.http.get<any>("http://localhost:3000/login").subscribe(res => {

      const user = res.find((a: any) => {
        
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password  
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      
       
      })

      if (user) {

        alert("Login SuccessFull");
        this.loginForm.reset
        this.router.navigate(['home'])
        

      } else {
        alert("User Not Found");
        alert("user not found");

      }

    })

  }


}
