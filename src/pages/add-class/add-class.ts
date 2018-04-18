import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { of } from "rxjs/observable/of";
import { ClassProvider } from '../../providers/class/class';

/**
 * Generated class for the AddClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-class',
  templateUrl: 'add-class.html',
})
export class AddClassPage {

  class = {
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    room : {},
    category: {}
  };
  selectedDay = new Date();
  minDate = new Date().toISOString();

  rooms$ = of([
    { id: "room1", name: "room1" }, 
    { id: "room2", name: "room2" }, 
    { id: "room3", name: "room3" }
  ]);

  categories$ = of([
    { name: "Zumba" },
    { name: "Yoga" },
    { name: "TRX" },
    { name: "BodyPump" }
  ]);


  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider:ClassProvider) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.class.startTime = preselectedDate;
    this.class.endTime = preselectedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClassPage');
  }

  addClass(
    classTitle: string,
    classTrainer: string,
    classCategory: string,
    classNote: string,
    classStart: string,
    classEnd: string,
    classRoom: string
    ): void {
        this.classProvider
          .addClass(classTitle, classTrainer,classCategory, classNote, classStart, classEnd, classRoom)
          .then(newEvent => {
        this.navCtrl.pop();
        console.log("class added")
        console.log(classTitle, classTrainer,classCategory, classNote, classStart, classEnd, classRoom);
      });
    }

  //select room option
  optionRoomSelected($event) {
    console.log("room selected");
    console.log($event);
    this.class.room = $event;
  }

  //select category option
  optionCategorySelected($event) {
    console.log("category selected");
    console.log($event);
    this.class.category = $event;
  }

















}
