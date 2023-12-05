import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  public isSubmitted = false;
  email: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public onSubmit() {
    this.router.navigate(['dashboard']);
  }
}
