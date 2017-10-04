import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy, 
  Input} from '@angular/core';
import { CellFormat } from '../models/cell-format.interface';

/**
 * A component representing the body of an 
 * html table.
 * 
 * Usage: Internal Only.
 */
@Component({
  selector: 'tbody[uat-body]',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent<T> implements OnInit {
  @Input() bodyCells: CellFormat[];
  @Input() rowsData: T[];

  constructor() { }

  ngOnInit() {
  }

}
