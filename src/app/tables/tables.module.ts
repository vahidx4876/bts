import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TablesRouterModule } from './tables.router';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';


import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { DataService } from '../services/data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import { Sharedx1Module } from '../shared/sharedx1/sharedx1.module';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    Sharedx1Module,
    MatDialogModule,
    HttpClientModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    TablesRouterModule
  ],
  declarations: [
   FilterTableComponent,
   FeatureTableComponent,
   ResponsiveTableComponent,
   FixedTableComponent],
   providers: [
    DataService
  ],  entryComponents: [

  ],

  exports: [
    ]
      
})
export class TablesModule { }


