import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcrudtableComponent } from './ccrudtable/ccrudtable.component';

const routes: Routes = [{path:'ccrudtab',component:CcrudtableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcrudtableRoutingModule { }
