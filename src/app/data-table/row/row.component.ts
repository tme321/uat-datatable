import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { CellFormat } from '../models/cell-format.interface';

/**
 * A component representing a single row inside
 * either the tbody or tfoot section of an html 
 * table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'tr[uat-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent<T> implements OnInit {
  @Input() rowData: T;
  @Input() cellFormats: CellFormat[]; 

  constructor() { }

  ngOnInit() {
  }

}
