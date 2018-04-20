import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InquiryProvider } from '../../providers/inquiry/inquiry';
/**
 * Generated class for the InquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inquiry',
  templateUrl: 'inquiry.html',
})
export class InquiryPage {

  public inquiries: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public inquiryProvider: InquiryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryPage');


    this.inquiryProvider.getInquiryList().on("value", inquiryListSnapshot => {
      this.inquiries = [];
      inquiryListSnapshot.forEach(snap => {
        this.inquiries.push({
          id: snap.key,
          name: snap.val().name,
          email: snap.val().email,
          gender: snap.val().gender,
          phone: snap.val().phone,
          message: snap.val().message,
        });
        return false;
      });
    });
    console.log("source " + this.inquiries);



  }




}
