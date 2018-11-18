import { InjectionToken } from '@angular/core';

// Although the SlidesConfig interface plays no role in dependency injection,
// it supports typing of the configuration object within the class.
export interface SlidesConfig {
  list: Array<{title: string, imgRoot: string, padding: string, images: Array<string>}>;
}

// Configuration values for our app
export const MY_CONFIG: SlidesConfig = {
  list: [ {title: "Blue Residence 2", imgRoot: "blue-residence-2", padding: "30vh", images: [
    "188_180227_cam_1_v3_comunitate.jpg",
    "188_180227_cam_3_comunitate.jpg",
    "188_180227_instagram_paste.jpg",
    "IMG-20180608-WA0003.jpg",
    "IMG-20180810-WA0005.jpg",
    "IMG-20180810-WA0006.jpg"
  ]},
    {title: "CATTIA", imgRoot: "cattia", padding: "10vh", images: [
    "11p01.jpg",
    "15p04.jpg",
    "20170720_100643.jpg",
    "20180412_154222.jpg",
    "first page.jpg",
    "IMG-20180719-WA0011.jpg"
  ]},
    {title: "Sitei", imgRoot: "sitei", padding: "50vh", images: [
    "cam1_ext_f3.jpg",
    "cam2_012.jpg",
    "cam3_intrarea_f.jpg",
    "cam4_scara_f4.jpg",
    "cam5_ap_f.jpg",
    "cam6_ext_f3.jpg"
  ]}]
};

// Create a config token to avoid naming conflicts
export const MY_CONFIG_TOKEN = new InjectionToken<SlidesConfig>('image-config');
