import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappinRoutingModule } from './mappin-routing.module';
import { PintabComponent } from './pintab/pintab.component';
import { MatTabsModule, MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MappinRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [PintabComponent]
})
export class MappinModule { }
