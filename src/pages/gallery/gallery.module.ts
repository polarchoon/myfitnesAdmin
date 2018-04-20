import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    IonicImageViewerModule
  ],
})
export class GalleryPageModule {}
