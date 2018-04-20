import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserClassPage } from './user-class';

@NgModule({
  declarations: [
    UserClassPage,
  ],
  imports: [
    IonicPageModule.forChild(UserClassPage),
  ],
})
export class UserClassPageModule {}
