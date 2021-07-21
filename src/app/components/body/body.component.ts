import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  hasError="gray";
  hasErrors="gray";
  newcolor="2px solid blue";
  newcolorb="2px solid gray";
  newcolorc="2px solid gray";

  constructor() { }

  ngOnInit(): void { 
    
  }

  clickOnesa(){
    this.newcolor="2px solid blue";
    this.newcolorb="2px solid gray";
    this.newcolorc="2px solid gray";
    console.log("ingreso")
  }
  clickOnesb(){
    this.newcolor="2px solid gray";
    this.newcolorb="2px solid blue";
    this.newcolorc="2px solid gray";
  }
  clickOnesc(){
    this.newcolor="2px solid gray";
    this.newcolorb="2px solid gray";
    this.newcolorc="2px solid blue";  
  }

  clickOnb(){
    this.hasErrors="blue";
    this.hasError="gray";
  }
  clickOn(){
    this.hasError="blue";
    this.hasErrors="gray";
  }



}
