import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddeviceboardComponent } from '../adddeviceboard.component';

const routes: Routes = [

  {path:'devices',component:AdddeviceboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddevicesRoutingModule { }
