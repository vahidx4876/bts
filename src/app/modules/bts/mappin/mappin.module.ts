import { NgModule } from '@angular/core';
import { MappinRoutingModule } from './mappin-routing.module';
import { PintabComponent } from './pintab/pintab.component';
import { MatTabsModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalGalleryModule } from 'angular-modal-gallery';

import { CcrudtableModule } from '../../shared/ccrudtable/ccrudtable.module';
import { ModalgModule } from '../modalg/modalg.module';
import { DashboardWidgetModule } from '../../../dashboard-widget/dashboard-widget.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { PinTabService } from './pintab/PinTabService';


    





@NgModule({
  imports: [
 
    CcrudtableModule,
    ModalgModule,
    RouterModule,
    MappinRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    FlexLayoutModule,  
    MatInputModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    DashboardWidgetModule,
    MatPaginatorModule,
    


    
  ],
  declarations: [PintabComponent  ],
  providers:[PinTabService]
})
export class MappinModule {

}
