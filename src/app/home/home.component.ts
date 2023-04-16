import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public name: any;
  public age: any;

  constructor() {}

  ngOnInit(): void {
    console.log("Chào mừng đến component Home")
    this.age = 0
  }

  public resetValue() {
    console.log('resetValue')
    this.age = 0
    this.name = ''
  }

}
