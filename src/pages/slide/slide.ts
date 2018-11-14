import {Component, ViewChild, Inject} from '@angular/core';
import {Slides} from "ionic-angular";

// Import the config-related things
import { MY_CONFIG_TOKEN, MY_CONFIG, SlidesConfig } from '../../config/image-config';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
  providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})
export class SlidePage {
  @ViewChild('activeSlideComponent') activeSlideComponent: Slides;

  currentProjectIndex: number;
  slideIndexArray: Array<number>;
  currentSlides: Array<{title: string, description: string, image: string, padding: string}>;
  availableSlides: Array<Array<{title: string, description: string, image: string, padding: string}>>;
  localConfig: SlidesConfig;
  blackWhiteToggle: boolean;
  isDescActive: boolean;

  constructor(@Inject(MY_CONFIG_TOKEN) private imageConfig: SlidesConfig) {
    this.localConfig = imageConfig;
    this.currentProjectIndex = 0;
    this.blackWhiteToggle = false;
    this.isDescActive = false;
    this.slideIndexArray = new Array(this.localConfig.list.length).fill(0);
    this.initSlides();
  }

  private initSlides() {
    this.availableSlides = [];
    for (let projectIndex = 0; projectIndex < this.localConfig.list.length; projectIndex++) {
      let project = this.localConfig.list[projectIndex];
      let slides = Array<{title: string, description: string, image: string, padding: string}>();
      let blackWhitePath = this.blackWhiteToggle ? '' : 'black_white/';
  //    console.log('update images for project: ' + projectIndex + ' with first image: ' + this.slideIndexArray[projectIndex]);
      for (let imageIndex = 0; imageIndex < project.images.length; imageIndex++) {
        if (this.slideIndexArray[projectIndex] <= imageIndex) {
          slides.push({
            title: project.title,
            description: '',
            image: 'assets/imgs/' + blackWhitePath + project.imgRoot + '/' + project.images[imageIndex],
            padding: project.padding
          });
        }
      }
      for (let imageIndex = 0; imageIndex < project.images.length; imageIndex++) {
        if (this.slideIndexArray[projectIndex] > imageIndex) {
          slides.push({
            title: project.title,
            description: '',
            image: 'assets/imgs/' + blackWhitePath + project.imgRoot + '/' + project.images[imageIndex],
            padding: project.padding
          });
        }
      }
      this.availableSlides.push(slides)
    }

    this.currentSlides = this.availableSlides[this.currentProjectIndex];
  }

  /*nextSlide(slidesComponent : Slides) {
    if (this.currentSlides.length == slidesComponent.getActiveIndex() + 1) {
      //slidesComponent.getActiveIndex();
      slidesComponent.slideTo(0);
      slidesComponent.update();
    } else {
      slidesComponent.slideNext();
    }
  }

  nextProject(slidesComponent : Slides) {
    if (this.availableSlides.length == this.currentProject + 1) {
      // if last project, move to first project
      this.currentProject = 0;
    } else {
      // otherwise, move to next project
      this.currentProject = this.currentProject + 1;
    }
    this.currentSlides = this.availableSlides[this.currentProject];
    slidesComponent.slideTo(0);
    slidesComponent.update();
  }*/

  nextProject() {
  //  console.log('update position for project: ' + this.currentProjectIndex + ' from: ' + this.slideIndexArray[this.currentProjectIndex] + ' to: ' + (this.slideIndexArray[this.currentProjectIndex] + this.activeSlideComponent.getActiveIndex() - 1));
    this.slideIndexArray[this.currentProjectIndex] = this.slideIndexArray[this.currentProjectIndex] + this.activeSlideComponent.getActiveIndex() - 1;
    if (this.availableSlides.length == this.currentProjectIndex + 1) {
      // if last project, move to first project
      this.currentProjectIndex = 0;
    } else {
      // otherwise, move to next project
      this.currentProjectIndex = this.currentProjectIndex + 1;
    }
    this.initSlides();
    this.currentSlides = this.availableSlides[this.currentProjectIndex];
    //this.activeSlideComponent.slideTo(this.slideIndexArray[this.currentProjectIndex], 0);
    //this.activeSlideComponent.update();
  }

  updateBlackWhite() {
   // console.log('update position for project: ' + this.currentProjectIndex + ' from: ' + this.slideIndexArray[this.currentProjectIndex] + ' to: ' + (this.slideIndexArray[this.currentProjectIndex] + this.activeSlideComponent.getActiveIndex() - 1));
    this.slideIndexArray[this.currentProjectIndex] = this.slideIndexArray[this.currentProjectIndex] + this.activeSlideComponent.getActiveIndex() - 1;
    this.initSlides();
    ///this.activeSlideComponent.update();
  }
}
