import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassProvider } from '../../providers/class/class';
/**
 * Generated class for the UserClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-class',
  templateUrl: 'user-class.html',
})
export class UserClassPage {

  public userList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider: ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserClassPage');

    // this.classProvider.getUserList().on("value", userListSnapshot => {
    //   this.userList = [];
    //   userListSnapshot.forEach(snap => {
    //     this.userList.push({
    //       id: snap.key,
    //       name: snap.val().firstName,
    //       email: snap.val().email,
    //       class: snap.child('classList').child('')
    //     });
    //     return false;
    //   });
    // });
    // console.log("user " + this.userList)
  }




















}
