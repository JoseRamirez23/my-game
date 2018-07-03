import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  number:number=0;
  timer:any;
  button:boolean=false;

  start(){
    this.button = true;
    this.timer = setInterval(() => {
      this.number += 1;
    },1000);
    
  }

  stop(){
    this.button=false;
    clearInterval(this.timer);

    let newNumber = this.number;
  }
 ngOnInit() {
  console.log(this.number);


 }

}
