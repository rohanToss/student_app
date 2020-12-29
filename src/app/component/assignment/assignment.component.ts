import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewassignmentComponent } from '../newassignment/newassignment.component';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
	const dialogRef =  this._dialog.open(NewassignmentComponent,{
  		width:'800px',
  		height:'600px'
  	})
  }

}
