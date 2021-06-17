import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Ahmed Khalil Portfolio';
  openOrClose: number = 1;
  date = new Date().getFullYear();

  constructor(private service: DataService) {}
  data: any;
  ngOnInit() {
    this.getDate();
  }

  toggleNav() {
    if (this.openOrClose === 1) {
      this.openOrClose = 2;
    } else {
      this.openOrClose = 1;
    }
    console.log(this.openOrClose);
  }
  closeNav() {
    this.openOrClose = 1;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  duration = () => {
    let day1 = new Date('2018-9-20');
    let day2 = new Date();

    let difference = day2.getTime() - day1.getTime();
    let days = difference / (1000 * 3600 * 24);
    return Math.floor(days / 365);
  };
  getDate() {
    this.service.getData().subscribe((x: any) => {
      this.data = x;
    });
  }
}
