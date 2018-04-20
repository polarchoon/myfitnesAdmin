import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassProvider } from '../../providers/class/class';
/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {

  selectedDay = new Date()
  selectedObject
  public eventSource: Array<any>;
  viewTitle;
  isToday: boolean;
  calendarModes = [
    { key: 'month', value: 'Month' },
    { key: 'week', value: 'Week' },
    { key: 'day', value: 'Day' },
  ]

  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public classProvider: ClassProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');


    this.classProvider.getClassList().on("value", classListSnapshot => {
      this.eventSource = [];
      classListSnapshot.forEach(snap => {
        this.eventSource.push({
          id: snap.key,
          title: snap.val().title,
          trainer: snap.val().trainer,
          category: snap.val().category,
          note: snap.val().note,
          startTime: new Date(snap.val().startTime),
          endTime: new Date(snap.val().endTime),
          room: snap.val().room
        });
        
        return false;
      });
      console.log("source " + this.eventSource);
    });


  }

  //view month change
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log('Class selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    this.navCtrl.push('ClassDetailPage', { eventId: event.id });
  }

  changeMode(mode) {
    console.log("change mode " + mode);
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedObject = ev;
  }

  //when date is changed
  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    this.selectedDay = event
    console.log("current date changed")
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return (date < current);
  };

  onOptionSelected($event: any) {
    console.log("option selected " + $event)
  }

  addClass() {
    this.navCtrl.push("AddClassPage", { selectedDay: this.selectedDay });
  }


  

}
