import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar) { }
  updatedUser : FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition : MatSnackBarVerticalPosition = 'bottom';


  ngOnInit(): void {
  	this.updatedUser = new FormGroup({
  		name: new FormControl(null),
  		institute : new FormControl(null),
  		dob: new FormControl(null),
  	})
  }

  onSubmit(){
  	console.log(this.updatedUser.value);
    this._snackBar.open('updated','close',{
      duration:2000,
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition
    })
  }

}
