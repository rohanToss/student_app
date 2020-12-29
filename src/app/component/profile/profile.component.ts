import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileupdateComponent } from '../profileupdate/profileupdate.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openUpdate(){
  	const dialogRef = this.dialog.open(ProfileupdateComponent,{height:'400px',width:'600px'})
  	dialogRef.afterClosed().subscribe(result=>{
  		console.log('Dialog was closed')
  	})

  }

  onAchieve(){
    const dialogRef = this.dialog.open(AchievementsComponent,{
      height:'600px',
      width:'800px'
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log('AchievementsComponent closed')
    })
  }

  onCertificate(){
   const dialogRef = this.dialog.open(CertificatesComponent,{
      height:'600px',
      width:'800px'
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log('CertificatesComponent closed')
    }) 
  }

}
