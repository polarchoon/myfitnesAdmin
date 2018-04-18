import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { of } from "rxjs/observable/of";
import { PhotoProvider } from '../../providers/photo/photo';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the AddGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-gallery',
  templateUrl: 'add-gallery.html',
})
export class AddGalleryPage {

  categories$ = of([
    { name: "Zumba" },
    { name: "Yoga" },
    { name: "TRX" },
    { name: "BodyPump" }
  ]);
  Picture
  base64Image

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public photoProvider:PhotoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGalleryPage');
  }

  AddPicture(photoName: string, photoCategory:string,Picture: string){
    this.photoProvider.AddPicture(photoName, photoCategory,this.Picture);
    this.navCtrl.pop()
  }

  takePicture(){
    this.camera.getPicture({
      // quality : 95,
      // destinationType : this.camera.DestinationType.DATA_URL,
      // sourceType : this.camera.PictureSourceType.CAMERA,
      // allowEdit : true,
      // encodingType: this.camera.EncodingType.JPEG,
      // targetWidth: 500,
      // targetHeight: 500,
      // saveToPhotoAlbum: true
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }).then(imageData => {
       // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //this.Picture is passing the string to our DB
      this.Picture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }












    //select category option
    optionCategorySelected($event) {
      console.log("category selected");
      console.log($event);
      //this.class.category = $event;
    }
}
