import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiedotPage } from './tiedot';

@NgModule({
  declarations: [
    TiedotPage,
  ],
  imports: [
    IonicPageModule.forChild(TiedotPage),
  ],
})
export class SpecialPageModule {}
