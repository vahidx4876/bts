import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [ChartjsComponent, LineChartComponent, BarChartComponent, PieChartComponent, AreaChartComponent],
  exports : [ChartModule,ChartjsComponent, LineChartComponent, BarChartComponent, PieChartComponent, AreaChartComponent,FormsModule,CommonModule,]
})
export class ChartjsModule { }
