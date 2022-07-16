import { Component, Input, DoCheck } from '@angular/core';
import { Shirt } from 'src/app/classes/shirt';

@Component({
  selector: 'app-shirt-finished',
  templateUrl: './shirt-finished.component.html',
  styleUrls: ['./shirt-finished.component.css'],
})
export class ShirtFinishedComponent implements DoCheck {
  constructor() {}

  @Input() shirt!: Shirt;
  ngDoCheck() {
    this.setFinished();
  }

  finished: boolean = false;

  setFinished() {
    if (
      !this.shirt.title ||
      !this.shirt.brand ||
      !this.shirt.bp1 ||
      !this.shirt.bp2
    )
      this.finished = false;
    else this.finished = true;
  }
}
