import {Component, ViewChild} from '@angular/core';
import {Content} from "ionic-angular";
import {Img} from "ionic-angular/components/img/img-interface";
import {updateImgs} from "ionic-angular/components/content/content";

@Component({
  selector: 'page-blue-residence-2',
  templateUrl: 'blue-residence-2.html'
})
export class BlueResidence2Page {
  @ViewChild(Content) _content: Content;
  items: Array<{title: string, url: string, style: string}>;

  constructor() {
    this.items = [];
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/188_180227_cam_1_v3_comunitate.jpg',
      style: 'width: 300px; height: 400px;'
    });
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/188_180227_cam_3_comunitate.jpg',
      style: 'width: 400px; height: 300px;'
    });
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/188_180227_instagram_paste.jpg',
      style: 'width: 400px; height: 400px;'
    });
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/IMG-20180608-WA0003.jpg',
      style: 'width: 400px; height: 300px;'
    });
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/IMG-20180810-WA0005.jpg',
      style: 'width: 400px; height: 300px;'
    });
    this.items.push({
      title: 'logo',
      url: 'assets/imgs/blue-residence-2/IMG-20180810-WA0006.jpg',
      style: 'width: 400px; height: 300px;'
    });
  }

  /**
   * HACK ALERT! - Resolves issue with <ion-img> tags not displaying images on
   * initial load AND unloading images that have been previously loaded/displayed
   *
   * Unfortunately this IS needed as the team at Ionic STILL haven't resolved
   * this issue as shown in the following threads:
   *
   * https://github.com/ionic-team/ionic/issues/9660
   * https://github.com/ionic-team/ionic/issues/11326
   *
   * More details on this hack that fixes the issue can be found at the following
   * forum thread: https://github.com/ionic-team/ionic/issues/9660#issuecomment-322739124
   *
   * Credited to the following developer: https://github.com/decpio
   *
   * @public
   * @method ngAfterViewInit
   * @return {none}
   */
  ngAfterViewInit() : void
  {
    if (this._content)
    {
      this._content.imgsUpdate = () =>
      {
        if (this._content._scroll.initialized && this._content._imgs.length && this._content.isImgsUpdatable())
        {
          // Reset cached bounds
          this._content._imgs.forEach((img: Img) => (<any>img)._rect = null);

          // Use global position to calculate if an img is in the viewable area
          updateImgs(this._content._imgs, this._content._cTop * -1, this._content.contentHeight, this._content.directionY, 1400, 400);
        }
      };
    }
  }
}
