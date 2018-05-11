import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PintabComponent } from './pintab/pintab.component';

const routes: Routes = [{path:'pintab',component:PintabComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappinRoutingModule { }
