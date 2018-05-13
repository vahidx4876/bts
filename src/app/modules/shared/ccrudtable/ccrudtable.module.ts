import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CcrudtableRoutingModule } from './ccrudtable-routing.module';
import { CcrudtableComponent } from './ccrudtable/ccrudtable.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { DataService } from './services/data.service';
import { MatPaginatorModule, MatToolbarModule, MatTableModule, MatSortModule, MatIconModule, MatInputModule, MatButtonModule, MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalgModule } from '../../bts/modalg/modalg.module';



@NgModule({
  imports: [
    ModalgModule,
    CcrudtableRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule , 
    ReactiveFormsModule,
    MatOptionModule
    ,MatSelectModule,
    CommonModule

  ],
  declarations: [CcrudtableComponent,EditDialogComponent,DeleteDialogComponent,AddDialogComponent],
  providers:[DataService],
  exports:[FormsModule,CommonModule,CcrudtableComponent,EditDialogComponent,DeleteDialogComponent,AddDialogComponent],
  entryComponents:[EditDialogComponent,DeleteDialogComponent,AddDialogComponent]
})
export class CcrudtableModule { }
