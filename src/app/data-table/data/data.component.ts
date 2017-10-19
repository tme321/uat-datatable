import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { CellFormat } from '../models/cell-format.interface';

/**
 * A component representing a single cell inside
 * an html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'td[uat-data]',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent<T> implements OnInit {
  @Input() format: CellFormat;
  @Input() data: T;

  constructor() { }

  ngOnInit() {
  }

  resolveData(path: string, data: T) {
    return path.split('.')
      .reduce((acc,curr)=>acc[curr],data);
  }

}
