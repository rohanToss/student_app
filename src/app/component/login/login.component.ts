import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : FormGroup;

  constructor() { }

  ngOnInit(): void {
  	this.login = new FormGroup({
  		'email': new FormControl(null),
  		'password': new FormControl(null)
  	})
  }

  	onLogin(){
		console.log(this.login.value);
	}



}

