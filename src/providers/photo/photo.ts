//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoProvider {

  public PhotoRef:firebase.database.Reference;

  constructor() {
    console.log('Hello PhotoProvider Provider');
    this.PhotoRef = firebase.
    database().
    ref('pictureList');
  }

 //will take the image from the addphoto page, push the image to storage, and then store the downloadUrl and given name of the photo


 AddPicture(pictureName: string, pictureCategory:string, picture: string): Promise<any> {
  firebase.storage().ref('/pictures/').child(pictureName)
  .putString(picture, 'base64', {contentType: 'image/jpeg'})
  .then((savedPicture) => {
  this.PhotoRef.push({
   picture: savedPicture.downloadURL,
    name: pictureName,
    category: pictureCategory
   })
  });
  return 
}

//returns the db refrence of our images so we can display them 
getPhotoList(): firebase.database.Reference {
  return this.PhotoRef;
}
















}
