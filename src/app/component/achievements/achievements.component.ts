import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }
  achieve:FormGroup;
  currentState:boolean = false;

  ngOnInit(): void {
  	this.achieve = new FormGroup({
  		'name': new FormControl(null),
  		'description': new FormControl(null),
  		'publishDate': new FormControl(null)
  	})
  }

  onSubmit(){
  	console.log(this.achieve.value);
  }

  onChangeState(){
  	this.currentState = !this.currentState
  	this.achieve.reset();
  }

}
