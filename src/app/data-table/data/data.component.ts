import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'td[uat-data]',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
