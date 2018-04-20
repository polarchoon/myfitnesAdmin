import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoProvider } from './../../providers/photo/photo';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  public photoList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public photoProvider: PhotoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    //calling our list from our Database, and setting values
    this.photoProvider.getPhotoList().on('value', snapshot => {
      this.photoList = [];
      snapshot.forEach( snap => {
        this.photoList.push({
          id: snap.key,
          name: snap.val().name,
          picture: snap.val().picture
        });
        console.log(this.photoList);
        return false
      });
    });
  }

  goToAddPhoto(){
    this.navCtrl.push('AddGalleryPage');
  }


}
