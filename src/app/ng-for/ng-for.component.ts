import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  public traiCay = ['Tao', 'Nho', 'Cam', 'Quyt'];

  ngOnInit(): void {
    console.log('trai cay = ', this.traiCay)
  }

}
