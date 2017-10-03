import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tfoot[uat-foot]',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
