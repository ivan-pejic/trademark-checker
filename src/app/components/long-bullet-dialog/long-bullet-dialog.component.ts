import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShirtForm } from 'src/app/interfaces/shirt-form';
import { ShirtService } from 'src/app/services/shirt.service';

import { MatDialog } from '@angular/material/dialog';
import { ImageZoomComponent } from '../image-zoom/image-zoom.component';

@Component({
  selector: 'app-long-bullet-dialog',
  templateUrl: './long-bullet-dialog.component.html',
  styleUrls: ['./long-bullet-dialog.component.css'],
})
export class LongBulletDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ShirtForm,
    private shirtService: ShirtService,
    public dialogRef: MatDialogRef<LongBulletDialogComponent>,
    public dialog: MatDialog
  ) {}

  clone = Object.assign({}, this.data);

  checkTrademark(query: string, e: Event) {
    this.upperCaseTitleAndBrand();

    if ((<HTMLTextAreaElement>e.target).name == 'brand') {
      if (query.length == 0) this.data.tmBrand = ['UNCHECKED'];
      else if (this.clone.brand != this.data.brand) {
        this.data.tmBrand = this.shirtService.checkTrademark(query);
        this.clone.brand = this.data.brand;
      }
    } else if ((<HTMLTextAreaElement>e.target).name == 'title') {
      if (query.length == 0) this.data.tmTitle = ['UNCHECKED'];
      else if (this.clone.title != this.data.title) {
        this.data.tmTitle = this.shirtService.checkTrademark(query);
        this.clone.title = this.data.title;
      }
    } else if ((<HTMLTextAreaElement>e.target).name == 'bp1') {
      if (query.length == 0) this.data.tmBrand = ['UNCHECKED'];
      else if (this.clone.bp1 != this.data.bp1) {
        this.data.tmBp1 = this.shirtService.checkTrademark(query);
        this.clone.bp1 = this.data.bp1;
      }
    } else if ((<HTMLTextAreaElement>e.target).name == 'bp2') {
      if (query.length == 0) this.data.tmBrand = ['UNCHECKED'];
      else if (this.clone.bp2 != this.data.bp2) {
        this.data.tmBp2 = this.shirtService.checkTrademark(query);
        this.clone.bp2 = this.data.bp2;
      }
    }
  }

  changeType() {
    this.shirtService.changeType(this.data.id);
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
    this.dialog.open(ImageZoomComponent, {
      data: this.data,
    });
  }
}
