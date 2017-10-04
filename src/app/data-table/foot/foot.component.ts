import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { CellFormat } from '../models/cell-format.interface';

/**
 * A component representing a tfoot element
 * inside an html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'tfoot[uat-foot]',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootComponent<T> implements OnInit {
  @Input() footerCells: CellFormat[];
  @Input() rowsData: T[];

  constructor() { }

  ngOnInit() {
  }

}
