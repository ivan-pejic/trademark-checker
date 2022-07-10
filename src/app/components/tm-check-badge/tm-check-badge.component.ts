import { Component, Input } from '@angular/core';
import { ShirtTrademark } from 'src/app/classes/shirt-trademark';

@Component({
  selector: 'app-tm-check-badge',
  templateUrl: './tm-check-badge.component.html',
  styleUrls: ['./tm-check-badge.component.css'],
})
export class TmCheckBadgeComponent {
  @Input() tms!: ShirtTrademark;

  constructor() {}
}
