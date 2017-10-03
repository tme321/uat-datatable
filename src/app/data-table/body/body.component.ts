import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tbody[uat-body]',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
