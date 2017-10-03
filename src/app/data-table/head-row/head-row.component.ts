import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr[uat-head-row]',
  templateUrl: './head-row.component.html',
  styleUrls: ['./head-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
