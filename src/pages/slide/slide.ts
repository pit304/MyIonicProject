import {Component, ViewChild} from '@angular/core';
import {Content, Slides} from "ionic-angular";

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {
  @ViewChild(Content) _content: Content;
  @ViewChild('slidesComponent') slidesComponent: Slides;
  slides_used: Array<{title: string, description: string, image: string}>;
  slides: Array<{title: string, description: string, image: string}>;
  slides2: Array<{title: string, description: string, image: string}>;
  slides3: Array<{title: string, description: string, image: string}>;
  imgRoot: string;
  imgRoot2: string;
  imgRoot3: string;
  map = new Map([
    [ 1, "188_180227_cam_1_v3_comunitate.jpg" ],
    [ 2, "188_180227_cam_3_comunitate.jpg" ],
    [ 3, "188_180227_instagram_paste.jpg" ],
    [ 4, "IMG-20180608-WA0003.jpg" ],
    [ 5, "IMG-20180810-WA0005.jpg" ],
    [ 6, "IMG-20180810-WA0006.jpg" ]
  ]);
  map2 = new Map([
    [ 1, "11p01.jpg" ],
    [ 2, "15p04.jpg" ],
    [ 3, "20170720_100643.jpg" ],
    [ 4, "20180412_154222.jpg" ],
    [ 5, "first page.jpg" ],
    [ 6, "IMG-20180719-WA0011.jpg" ]
  ]);
  map3 = new Map([
    [ 1, "cam1_ext_f3.jpg" ],
    [ 2, "cam2_012.jpg" ],
    [ 3, "cam3_intrarea_f.jpg" ],
    [ 4, "cam4_scara_f4.jpg" ],
    [ 5, "cam5_ap_f.jpg" ],
    [ 6, "cam6_ext_f3.jpg" ]
  ]);

  constructor() {
    this.slides = [];
    this.imgRoot = 'assets/imgs/blue-residence-2/';
    for (let key of Array.from(this.map.keys())) {
      this.slides.push({
        title: 'Blue Residence 2',
        description: '',
        image: this.imgRoot + this.map.get(key)
      });
    }

    this.slides2 = [];
    this.imgRoot2 = 'assets/imgs/cattia/';
    for (let key of Array.from(this.map2.keys())) {
      this.slides2.push({
        title: 'CATTIA',
        description: '',
        image: this.imgRoot2 + this.map2.get(key)
      });
    }

    this.slides3 = [];
    this.imgRoot3 = 'assets/imgs/sitei/';
    for (let key of Array.from(this.map3.keys())) {
      this.slides3.push({
        title: 'Sitei',
        description: '',
        image: this.imgRoot3 + this.map3.get(key)
      });
    }
    this.slides_used = this.slides;
  }

  nextSlide(slidesComponent : Slides) {
    if (this.slides_used.length == slidesComponent.getActiveIndex() + 1) {
      slidesComponent.getActiveIndex()
      slidesComponent.slideTo(0);
      slidesComponent.update();
    } else {
      slidesComponent.slideNext();
    }
  }

  nextProject(slidesComponent : Slides) {
    if (this.slides_used == this.slides) {
      this.slides_used = this.slides2;
    } else if (this.slides_used == this.slides2) {
      this.slides_used = this.slides3;
    } else if (this.slides_used == this.slides3) {
      this.slides_used = this.slides;
    }
    slidesComponent.slideTo(0);
    slidesComponent.update();
  }
}
