import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IngredientsPopoverComponent } from '../ingredients-popover/ingredients-popover.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

async presentPopover(event){
  const popover = await this.popoverController.create({
    component: IngredientsPopoverComponent,
    event
  });
  return await popover.present();
}

  ngOnInit() {
  }

}
