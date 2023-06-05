import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup ;

  constructor(private formbuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      
      name:     [' '],
      email:    [' '],
      mobile:   [' '],
      password: [' '],
      
    })
  }
  
  signUp() {

    this.http.post<any>(" http://localhost:3000/login", this.signupForm.value).subscribe(res => {    

      alert("user record successfuly");  

      this.signupForm.reset(); 

      this.router.navigate(['/login']);  

   
    })
      
  }     

}
