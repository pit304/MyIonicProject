import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { BlueResidence2Page } from '../pages/blue-residence-2/blue-residence-2';
import { CATTIAPage } from '../pages/cattia/cattia';
import { SiteiPage } from '../pages/sitei/sitei';
import { SlidePage } from '../pages/slide/slide';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    BlueResidence2Page,
    CATTIAPage,
    SiteiPage,
    SlidePage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    BlueResidence2Page,
    CATTIAPage,
    SiteiPage,
    SlidePage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
