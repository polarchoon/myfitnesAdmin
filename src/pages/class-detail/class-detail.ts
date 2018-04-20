import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { of } from "rxjs/observable/of";
import { ClassProvider } from '../../providers/class/class';

/**
 * Generated class for the ClassDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-detail',
  templateUrl: 'class-detail.html',
})
export class ClassDetailPage {

  public currentClass: any = {};

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider: ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDetailPage');

    this.classProvider
      .getClassDetail(this.navParams.get("eventId"))
      .on("value", classSnapshot => {
        this.currentClass = classSnapshot.val();
        this.currentClass.id = classSnapshot.key;
      });
    console.log(this.currentClass)

  }


  //update class details
  updateClass(classId: string,
    classTitle: string,
    classTrainer: string,
    classCategory: string,
    classNote: string,
    classStart: string,
    classEnd: string,
    classRoom: string): void {
    this.classProvider.updateClass(classId, classTitle, classTrainer, classCategory, classNote, classStart, classEnd, classRoom);
    console.log("update " + classId, classTitle, classCategory, classNote, classStart, classEnd, classRoom)
    this.navCtrl.pop();
  }



  //select room option
  optionRoomSelected($event) {
    console.log("room selected");
    console.log($event);
    this.currentClass.room = $event;
  }

  //select category option
  optionCategorySelected($event) {
    console.log("category selected");
    console.log($event);
    this.currentClass.category = $event;
  }


}
