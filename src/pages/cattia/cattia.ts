import {Component, ViewChild} from '@angular/core';
import {Img} from "ionic-angular/components/img/img-interface";
import {Content, updateImgs} from "ionic-angular/components/content/content";

@Component({
  selector: 'page-cattia',
  templateUrl: 'cattia.html'
})
export class CATTIAPage {
  @ViewChild(Content) _content: Content;
  items: Array<{title: string, url: string, style: string}>;
  imgRoot: string;
  map = new Map([
    [ 1, "11p01.jpg" ],
    [ 2, "15p04.jpg" ],
    [ 3, "20170720_100643.jpg" ],
    [ 4, "20180412_154222.jpg" ],
    [ 5, "first page.jpg" ],
    [ 6, "IMG-20180719-WA0011.jpg" ]
  ]);

  constructor() {
    this.items = [];
    this.imgRoot = 'assets/imgs/cattia/';
    for (let key of Array.from(this.map.keys())) {
      this.items.push({
        title: 'logo',
        url: this.imgRoot + this.map.get(key),
        style: 'width: 400px; height: 400px;'
      });
    }
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
