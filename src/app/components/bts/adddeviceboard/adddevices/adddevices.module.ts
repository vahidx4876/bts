import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddevicesRoutingModule } from './adddevices-routing.module';
import { AdddeviceboardComponent } from '../adddeviceboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralbtsmapComponent } from '../generalbtsmap/generalbtsmap.component';
import { CrudtableComponent } from '../../tables/crudtable/crudtable.component';
import { DataService } from '../../../../services/data.service';
import { EditDialogComponent } from '../../../../dialogs/edit/edit.dialog.component';
import { AddDialogComponent } from '../../../../dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from '../../../../dialogs/delete/delete.dialog.component';
import { ServicesModule } from '../../../../modules/shared/services/services.module';


@NgModule({
  imports: [
    ServicesModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZ80jfM_0TTWVLVyFagmdW0fLW1ydzDq8'
    }),
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    MatDividerModule,
    CommonModule,
    AdddevicesRoutingModule,
    MatExpansionModule,
    MatNativeDateModule,

  ],
  declarations: [AdddeviceboardComponent,GeneralbtsmapComponent,CrudtableComponent,EditDialogComponent,AddDialogComponent,DeleteDialogComponent],
  entryComponents:[AddDialogComponent,DeleteDialogComponent,EditDialogComponent],
  providers:[DataService]
})
export class AdddevicesModule { }
