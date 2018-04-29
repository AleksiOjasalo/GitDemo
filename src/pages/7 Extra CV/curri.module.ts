import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurriPage } from './curri';

@NgModule({
  declarations: [
    CurriPage,
  ],
  imports: [
    IonicPageModule.forChild(CurriPage),
  ],
})
export class SpecialPageModule {}
