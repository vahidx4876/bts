import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import { GoogleMapComponent } from '../maps/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { InfotableComponent } from '../components/bts/tables/infotable/infotable.component';
import { MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BTSDashService } from './employee.service';


export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
]

@NgModule({
  imports: [

    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatCardModule,
    DashboardWidgetModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZ80jfM_0TTWVLVyFagmdW0fLW1ydzDq8'
    }),

    FlexLayoutModule,  
    MatInputModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
   

  ],
  declarations: [DashboardCrmComponent,GoogleMapComponent,InfotableComponent],
  exports:[ ],
  providers:[BTSDashService]
})
export class DashboardCrmModule { }
