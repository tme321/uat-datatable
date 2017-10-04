import { Component } from '@angular/core';
import { UATDataTable } from './data-table/models/data-table.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UAT Data Table Tutorial';
  
  ngOnInit() {
    this.onAddToTable();
  }

  /**
   * for testing purposes, a counter
   * for the number of columns added
   * to the table to generate unique
   * data values.
   */
  numCols: number = 0;

  /**
   * for testing purposes, a model fed to 
   * an instance of the table
   */
  dtModel: UATDataTable = {columns: []};

  /**
   * for testing purposes, a set of data fed
   * to an instance of the table.
   */
  tableRows = [{
    body: {content: []},
    footer: {content: []},
  }];


  /**
   * For testing purposes.
   * Add a new column definition and
   * an entry into the row of data being
   * fed to the instance of the table.
   */
  onAddToTable() {
    this.numCols++;
    this.addNewColumn(this.numCols);
    this.addValuesToRow(this.numCols);
  }

  /*
   * The following 2 functions are just for testing 
   * purposes and are merely adding new items onto 
   * the model and rows data being fed to the table 
   * during development dynamically so that I can 
   * ensure that my components are responding to
   * changes correctly.
   */

  addNewColumn(colNumber: number) {
    this.dtModel = {...this.dtModel};
    this.dtModel.columns = 
      [...this.dtModel.columns,
        {
          headerCellFormat: {
            content: `Header Cell ${colNumber}`
          },
          cellFormat: {
            contentPath: `body.content.${colNumber}`
          },
          footerCellFormat: {
            contentPath: `footer.content.${colNumber}`
          }        
        }];
  }

  addValuesToRow(rowNum: number) {
    this.tableRows[0].body.content[`${rowNum}`] = `Body Data ${rowNum}`;
    this.tableRows[0].footer.content[`${rowNum}`] = `Footer Data ${rowNum}`;
    this.tableRows = [...this.tableRows]; 
  }

}
