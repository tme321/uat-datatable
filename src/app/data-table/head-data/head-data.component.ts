import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'th[uat-head-data]',
  templateUrl: './head-data.component.html',
  styleUrls: ['./head-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
