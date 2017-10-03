import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr[uat-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
