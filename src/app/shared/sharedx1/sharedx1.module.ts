import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudtableComponent } from '../../components/bts/tables/crudtable/crudtable.component';
import { AddDialogComponent } from '../../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../../dialogs/delete/delete.dialog.component';
import { GeneralbtsmapComponent } from '../../components/bts/adddeviceboard/generalbtsmap/generalbtsmap.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [ 
    MatIconModule,
    CommonModule
  ],exports:[CrudtableComponent,AddDialogComponent,EditDialogComponent,DeleteDialogComponent,GeneralbtsmapComponent,FormsModule,CommonModule],
  declarations: [ CrudtableComponent,AddDialogComponent,EditDialogComponent,DeleteDialogComponent,GeneralbtsmapComponent]
})
export class Sharedx1Module { }
