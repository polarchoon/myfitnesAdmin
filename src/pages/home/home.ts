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

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

  goToViewClass() {
    this.navCtrl.push("ClassPage");
  }

  goToClassList() {
    this.navCtrl.push("ClassListPage");
  }

  goToGallery() {
    this.navCtrl.push("GalleryPage");
  }

  goToInquiry() {
    this.navCtrl.push("InquiryPage");
  }


}
