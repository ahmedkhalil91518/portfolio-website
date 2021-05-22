import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  openOrClose: number = 1
  ngOnInit() {}
  toggleNav() {
    if (this.openOrClose === 1) {
      this.openOrClose = 2
    } else {
      this.openOrClose = 1
    }
    console.log(this.openOrClose)
  }
  closeNav(){
    this.openOrClose = 1
  }
}
