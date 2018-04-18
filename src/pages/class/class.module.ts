import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassPage } from './class';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    ClassPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassPage),
    NgCalendarModule
  ],
})
export class ClassPageModule {}
