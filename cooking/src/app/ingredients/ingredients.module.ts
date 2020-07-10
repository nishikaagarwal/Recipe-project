import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsPageRoutingModule } from './ingredients-routing.module';

import { IngredientsPage } from './ingredients.page';
import { IngredientsPopoverComponent } from '../ingredients-popover/ingredients-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsPageRoutingModule
  ],
  entryComponents: [IngredientsPopoverComponent],
  declarations: [IngredientsPage, IngredientsPopoverComponent]
})
export class IngredientsPageModule {}
