import { Component, Input } from '@angular/core';
import { Trademark } from 'src/app/classes/trademark';

@Component({
  selector: 'app-tm-check-badge',
  templateUrl: './tm-check-badge.component.html',
  styleUrls: ['./tm-check-badge.component.css'],
})
export class TmCheckBadgeComponent {
  @Input() tms!: Trademark;

  constructor() {}
}
