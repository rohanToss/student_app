import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-notedata',
  templateUrl: './notedata.component.html',
  styleUrls: ['./notedata.component.css']
})
export class NotedataComponent implements OnInit {

  constructor(private route:Router, private active:ActivatedRoute) { }

  subject;
  ngOnInit(): void {
  	this.active.params.subscribe((params)=>{
  		this.subject = params['id']
  	})
  }

  onAdd(){
  	this.route.navigate([`/home/notes/${this.subject}/new`])

  }

}
