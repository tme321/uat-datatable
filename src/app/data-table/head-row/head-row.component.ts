import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { HeaderCellFormat } from '../models/header-cell-format.interface';

/**
 * A component representing a row inside the 
 * header of an html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'tr[uat-head-row]',
  templateUrl: './head-row.component.html',
  styleUrls: ['./head-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadRowComponent implements OnInit {
  @Input() headerCellFormats: HeaderCellFormat[];

  constructor() { }

  ngOnInit() {
    console.log(this.headerCellFormats);
  }

}
