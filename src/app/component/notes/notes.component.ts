import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

	className=['Mathematics','Biology'];
  name;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onaddClass(){
  	this.className.push('science')
  }

  onSubject(name){
    console.log('subject name',name);
    this.name = name;
    this.route.navigate([`/home/notes/${this.name}/data`])
  }

}
