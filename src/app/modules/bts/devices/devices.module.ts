import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { LinkTableComponent } from './link-table/link-table.component';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTableModule, MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { DataService } from './link-table/DataService';



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
    MatButtonModule,
  MatToolbarModule

  ],
  declarations: [LinkTableComponent],
  providers:[DataService]
})
export class DevicesModule { }
