import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkTableComponent } from './link-table/link-table.component';

const routes: Routes = [{path:'btslinktable',component:LinkTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
