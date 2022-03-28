import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tm-check-badge',
  templateUrl: './tm-check-badge.component.html',
  styleUrls: ['./tm-check-badge.component.css'],
})
export class TmCheckBadgeComponent implements OnInit {
  @Input() tms!: string[];
  constructor() {}

  ngOnInit(): void {}
}
