import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewnoteComponent implements OnInit {

	note:FormGroup;

  constructor(private route:Router,private active:ActivatedRoute) { }

  subject
  ngOnInit(): void {
    this.active.params.subscribe((params)=>{
      this.subject = params['id'];
    })

  	this.note = new FormGroup({
  		title: new FormControl('default Title'),
  		subject : new FormControl(null),
  		content: new FormControl(null),
  		video_url: new FormControl(null),
  		reference_url : new FormControl(null),
      image: new FormControl(null)
  	})
  }

  onSubmit(){
  	console.log(this.note.value);
  }

  onReset(){
  	this.note.reset();
  }

  onCancel(){
    this.route.navigate([`/home/notes/${this.subject}/data`])
  }

}
