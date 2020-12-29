import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-newassignment',
  templateUrl: './newassignment.component.html',
  styleUrls: ['./newassignment.component.css']
})
export class NewassignmentComponent implements OnInit {


  constructor() { }
  assignment : FormGroup;

  ngOnInit(): void {
  	this.assignment = new FormGroup({
  		'title': new FormControl(null),
  		'description': new FormControl(null),
  		'submissiondate': new FormControl(null),
  		'teacheremail': new FormControl(null)
  	})
  }

  onSubmit(){
  	const data = this.assignment.value;
  	console.log(data);
  }
  onReset(){
  	this.assignment.reset();
  }

}
