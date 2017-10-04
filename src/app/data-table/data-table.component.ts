import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { UATDataTable } from './models/data-table.interface';
import { HeaderCellFormat } from './models/header-cell-format.interface';
import { CellFormat } from './models/cell-format.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * A model driven data table that is extensible
 * through the dependency injection system.
 * 
 * Usage:  
 * <table uat-datatable 
 *  [model]="$model"
 *  [rowsData]="$rows">
 * </table>
 * 
 * Where $model is an object that implements UATDataTable
 * and $rows is an array of any type.
 */
@Component({
  selector: 'table[uat-datatable]',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UATDataTableComponent<T> implements OnInit {
  public headerModel = new BehaviorSubject<HeaderCellFormat[]>([]);
  public bodyModel = new BehaviorSubject<CellFormat[]>([]);
  public footerModel = new BehaviorSubject<CellFormat[]>([]);

  /**
   * Accept a new data table model and assign the
   * parts of the model to correct subjects.
   */  
  @Input() set model(model: UATDataTable) {
    this.headerModel.next(
      model.columns.map(column=>column.headerCellFormat));
    this.bodyModel.next(
      model.columns.map(column=>column.cellFormat));
    this.footerModel.next(
      model.columns.map(column=>column.footerCellFormat));
  }

  /**
   * Accept a set of data as an array.  The type is
   * defined as the generic parameter to the component
   * so that references to the component can type the
   * data in case it needs to be referenced.
   */
  @Input() set rowsData(data: T[]) {
    this.rowsCache = data;
  }

  /**
   * Todo: probably convert this into a subject like
   * the existing model parts.  For now a simple cache
   * will meet our needs.
   */
  public rowsCache: T[];
  
  constructor() { }

  ngOnInit() {
  }

}
