import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { LinkTableComponent } from './link-table/link-table.component';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule

  ],
  declarations: [LinkTableComponent]
})
export class DevicesModule { }
