import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'thead[uat-head]',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
