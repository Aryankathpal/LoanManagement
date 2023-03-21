import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  Signin(){
    this.router.navigate(['/home/dashboard'])
  }

  ngOnInit(): void {
  }

}
