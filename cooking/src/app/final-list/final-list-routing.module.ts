import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalListPage } from './final-list.page';

const routes: Routes = [
  {
    path: '',
    component: FinalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalListPageRoutingModule {}
