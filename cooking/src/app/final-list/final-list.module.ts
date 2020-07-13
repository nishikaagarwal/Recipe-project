import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalListPageRoutingModule } from './final-list-routing.module';

import { FinalListPage } from './final-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalListPageRoutingModule
  ],
  declarations: [FinalListPage]
})
export class FinalListPageModule {}
