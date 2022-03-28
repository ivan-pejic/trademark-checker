import { Component, Input, DoCheck } from '@angular/core';
import { ShirtForm } from 'src/app/interfaces/shirt-form';

@Component({
  selector: 'app-shirt-finished',
  templateUrl: './shirt-finished.component.html',
  styleUrls: ['./shirt-finished.component.css'],
})
export class ShirtFinishedComponent implements DoCheck {
  constructor() {}

  @Input() shirt!: ShirtForm;
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
