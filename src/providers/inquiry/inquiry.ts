//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the InquiryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InquiryProvider {

  public inquiryListRef: firebase.database.Reference;

  constructor() {
    console.log('Hello InquiryProvider Provider');

    this.inquiryListRef = firebase
      .database()
      .ref(`/inquiries`);

  }

  getInquiryList(): firebase.database.Reference {
    return this.inquiryListRef;
  }

  getInquiryDetail(inquiryId: string): firebase.database.Reference {
    return this.inquiryListRef.child(inquiryId);
  }


}
