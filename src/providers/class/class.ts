//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ClassProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClassProvider {

  public classListRef: firebase.database.Reference;
  public categoryListRef: firebase.database.Reference;

  constructor() {
    console.log('Hello ClassProvider Provider');

    this.classListRef = firebase
      .database()
      .ref(`/class/classList`);

    this.categoryListRef = firebase
      .database()
      .ref(`/class/classList/category`);

  }

  addClass(
    classTitle: string,
    classTrainer: string,
    classCategory: string,
    classNote: string,
    classStart: string,
    classEnd: string,
    classRoom: string
  ):
    firebase.database.ThenableReference {
    return this.classListRef.push({
      title: classTitle,
      trainer: classTrainer,
      category: classCategory,
      note: classNote,
      startTime: classStart,
      endTime: classEnd,
      room: classRoom
    });
  }


  getClassList(): firebase.database.Reference {
    return this.classListRef;
  }

  getCategoryList(): firebase.database.Reference {
    return this.categoryListRef;
  }

  getClassDetail(classId: string): firebase.database.Reference {
    return this.classListRef.child(classId);
  }

  getClassCategory(classCategory: string): firebase.database.Reference {
    return this.classListRef.child(classCategory);
  }

  deleteClass(classId) {
    return this.classListRef.child(classId).remove();
  }

  updateClass(classId: string,
    classTitle: string,
    classTrainer: string,
    classCategory: string,
    classNote: string,
    classStart: string,
    classEnd: string,
    classRoom: string
  ): Promise<any> {

    let updateEventRef = firebase.database().ref(`/class/classList/` + classId);

    return updateEventRef.update({
      title: classTitle,
      trainer: classTrainer,
      category: classCategory,
      note: classNote,
      startTime: classStart,
      endTime: classEnd,
      room: classRoom
    });
  }








}
