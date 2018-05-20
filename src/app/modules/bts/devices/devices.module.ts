import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { LinkTableComponent } from './link-table/link-table.component';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DevicesService } from '../../../services/DevicesService';


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
  declarations: [LinkTableComponent],
  providers:[DevicesService]
})
export class DevicesModule { }
