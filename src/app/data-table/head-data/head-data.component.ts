import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { HeaderCellFormat } from '../models/header-cell-format.interface';

/**
 * A component representing a single cell 
 * inside a header row of an html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'th[uat-head-data]',
  templateUrl: './head-data.component.html',
  styleUrls: ['./head-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadDataComponent implements OnInit {
  @Input() format: HeaderCellFormat;
  
  constructor() { }

  ngOnInit() {
    this.format.content
  }

}
