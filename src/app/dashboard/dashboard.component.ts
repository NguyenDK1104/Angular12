import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  money: any
  id = 1
  ngOnInit() {
    console.log("Thái bình là đất ăn chơi hai tay hai sọt tung hoành khắp nơi")
  }

  getId() {
    console.log("id = " + this.id)
  }
}
