import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShirtService } from 'src/app/services/shirt.service';
import { ShirtImportDialogComponent } from '../shirt-import-dialog/shirt-import-dialog.component';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css'],
})
export class OptionsListComponent implements OnInit {
  constructor(public shirtService: ShirtService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  isLong: boolean = true;

  createNewShirtCard() {
    this.shirtService.createShirt(this.isLong);
  }

  exportAsWord() {
    this.shirtService.exportAsWord();
  }

  openLinkImportDialog() {
    this.dialog.open(ShirtImportDialogComponent);
  }

  setLong() {
    this.isLong = this.shirtService.setLong();
  }
}
