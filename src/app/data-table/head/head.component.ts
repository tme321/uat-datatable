import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { HeaderCellFormat } from '../models/header-cell-format.interface';

/**
 * A component representing the thead element 
 * inside an html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'thead[uat-head]',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit {
  @Input() headerCells: HeaderCellFormat[];
  
  constructor() { }

  ngOnInit() {
  }

}
