import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShirtForm } from 'src/app/interfaces/shirt-form';
import { ShirtService } from 'src/app/services/shirt.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-long-bullet-dialog',
  templateUrl: './long-bullet-dialog.component.html',
  styleUrls: ['./long-bullet-dialog.component.css'],
})
export class LongBulletDialogComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ShirtForm,
    private shirtService: ShirtService,
    public dialogRef: MatDialogRef<LongBulletDialogComponent>,
    public dialog: MatDialog
  ) {}

  //trademarks!: any[];
  brandTrademark: any[] = ['UNCHECKED'];
  titleTrademark: any[] = ['UNCHECKED'];
  bp1Trademark: any[] = ['UNCHECKED'];
  bp2Trademark: any[] = ['UNCHECKED'];

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.shirtService.saveShirt(this.data);
  }

  checkTrademark(query: string, array: number) {
    this.upperCaseTitleAndBrand();

    if (typeof query !== 'undefined' && query.length > 0) {
      if (array == 0) {
        this.brandTrademark = this.shirtService.checkTrademark(query);
      } else if (array == 1) {
        this.titleTrademark = this.shirtService.checkTrademark(query);
      } else if (array == 2) {
        this.bp1Trademark = this.shirtService.checkTrademark(query);
      } else if (array == 3) {
        this.bp2Trademark = this.shirtService.checkTrademark(query);
      }
    }
  }

  checkLength(query: string): boolean {
    return this.shirtService.checkLength(this.data.id, query);
  }

  //capitalise title and brand
  upperCaseTitleAndBrand() {
    this.data.title = this.shirtService.toUpperCase(this.data.title);
    this.data.brand = this.shirtService.toUpperCase(this.data.brand);
    if (!this.data.isLong)
      this.data.bp1 = this.shirtService.toUpperCase(this.data.bp1);
  }

  openDialog() {
    console.log('aaa');
    this.dialog.open(LongBulletDialogComponent, {
      data: this.data,
    });
  }
}
