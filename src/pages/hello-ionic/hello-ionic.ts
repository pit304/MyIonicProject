import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  items: Array<{title: string, url: string, width: string, height: string}>;

  constructor() {
    this.items = [];
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/Logo_Exhibit_suport_A4.png',
      width: '533px',
      height: '237px'
    });
  }
}
