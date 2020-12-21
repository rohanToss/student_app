import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null),
      'password':new FormControl(null),
      'gender': new FormControl('male'),
      'dob': new FormControl(null),
      'institute': new FormControl(null)
    })
  }
  onSubmit(){
    let today = new Date();
    console.log(today.getUTCDate())
    console.log(this.register.value)
    this.route.navigate(['/']);
  }

}
