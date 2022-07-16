import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { ShirtService } from 'src/app/services/shirt.service';
import { Trademark } from 'src/app/classes/trademark';

import { ImageZoomComponent } from '../image-zoom/image-zoom.component';
import { Shirt } from 'src/app/classes/shirt';
import { Trademarks } from 'src/app/interfaces/trademarks';

@Component({
  selector: 'app-long-bullet-dialog',
  templateUrl: './long-bullet-dialog.component.html',
  styleUrls: ['./long-bullet-dialog.component.css'],
})
export class LongBulletDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public shirt: Shirt,
    private shirtService: ShirtService,
    public dialogRef: MatDialogRef<LongBulletDialogComponent>,
    public dialog: MatDialog
  ) {}

  clone = Object.assign({}, this.shirt);

  //                                     //
  // @TODO REMOVE CLONE GO WITH ONCHANGE //
  //                                     //
  checkTrademark(query: string, e: Event) {
    //console.log(e);
    if ((e as any).relatedTarget != null) {
      this.shirt.prepare();
      const target = (<HTMLTextAreaElement>e.target).name as keyof Shirt;
      const trademark = (<HTMLTextAreaElement>e.target)
        .name as keyof Trademarks;

      if (query.length == 0)
        this.shirt.trademarks[target as keyof Trademarks].trademarkName = [
          'UNCHECKED',
        ];
      else if (this.clone[target] != this.shirt[target])
        this.shirtService.checkTrademark(query).then((response: Trademark) => {
          this.shirt.trademarks[trademark].trademarkName =
            response.trademarkName;
          this.shirt.trademarks[trademark].trademarkSerial =
            response.trademarkSerial;

          this.clone.trademarks[target as keyof Trademarks] =
            this.shirt.trademarks[target as keyof Trademarks];
        });
    }
  }

  changeType() {
    this.shirtService.changeType(this.shirt.id);
  }

  checkLength(query: string): boolean {
    return this.shirtService.checkLength(this.shirt.id, query);
  }

  openDialog() {
    this.dialog.open(ImageZoomComponent, {
      data: this.shirt,
    });
  }
}
