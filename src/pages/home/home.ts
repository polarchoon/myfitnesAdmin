import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {

  }

  logout() {
    this.authProvider.logoutUser();
    this.navCtrl.push("LoginPage");
    console.log("logged out")
  }

  goToViewClass(){
    this.navCtrl.push("ClassPage");
  }

  goToClassList(){
    this.navCtrl.push("ClassListPage");
  }

  goToGallery(){
    this.navCtrl.push("GalleryPage");
  }

}
