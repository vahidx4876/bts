import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { CrudtableComponent } from '../components/bts/tables/crudtable/crudtable.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent , data: { animation: 'fixed' }},
  	{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
    { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }},
    {path:'crudtable',component:CrudtableComponent ,data: { animation: 'crudtable' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}