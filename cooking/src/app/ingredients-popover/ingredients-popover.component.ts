import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ingredients-popover',
  templateUrl: './ingredients-popover.component.html',
  styleUrls: ['./ingredients-popover.component.scss'],
})
export class IngredientsPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

}
