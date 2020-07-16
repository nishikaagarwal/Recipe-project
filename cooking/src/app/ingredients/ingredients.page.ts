import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IngredientsPopoverComponent } from '../ingredients-popover/ingredients-popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  constructor(public popoverController: PopoverController,private router: Router) { }

async presentPopover(event){
  const popover = await this.popoverController.create({
    component: IngredientsPopoverComponent,
    cssClass: 'popover-class',
    event
  });
  return await popover.present();
}

navigate() {
  this.router.navigate(['/final-list']);
}
  ngOnInit() {
  }

}
