import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UATDataTableComponent } from './data-table.component';
import { RowComponent } from './row/row.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { HeadDataComponent } from './head-data/head-data.component';
import { DataComponent } from './data/data.component';
import { FootComponent } from './foot/foot.component';
import { HeadRowComponent } from './head-row/head-row.component';

/**
 * This module exports the UATDataTableComponent
 * for use in an Angular app.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    UATDataTableComponent
  ],
  declarations: [
    UATDataTableComponent, 
    RowComponent, 
    HeadComponent, 
    BodyComponent, 
    HeadDataComponent, 
    DataComponent, 
    FootComponent, 
    HeadRowComponent
  ]
})
export class DataTableModule { }
