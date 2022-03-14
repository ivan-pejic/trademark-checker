import { Component, Input, OnInit } from '@angular/core';
import { ShirtService } from 'src/app/services/shirt.service';

@Component({
  selector: 'app-change-shirt',
  templateUrl: './change-shirt.component.html',
  styleUrls: ['./change-shirt.component.css'],
})
export class ChangeShirtComponent implements OnInit {
  @Input() mode!: string;
  @Input() id!: number;
  constructor(public shirtService: ShirtService) {}

  ngOnInit(): void {}

  checkLength(): boolean {
    return this.shirtService.checkLength(this.id, this.mode);
  }
}
