import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
 /*   for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  */
    this.items.push({
      title: 'Deploy demo',
      note: 'Done',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    this.items.push({
      title: 'Integrate images',
      note: 'In Progress',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    this.items.push({
      title: 'Test image loading performance',
      note: 'Todo',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    this.items.push({
      title: 'Deploy custom image viewer',
      note: 'Todo',
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
