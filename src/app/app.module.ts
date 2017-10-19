import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTableModule } from './data-table/data-table.module';
import { CustomCellComponent } from './custom-cell/custom-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCellComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DataTableModule
  ],
  providers: [],
  entryComponents: [
    CustomCellComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
