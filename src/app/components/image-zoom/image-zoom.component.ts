import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatDialog } from '@angular/material/dialog';
import { Shirt } from 'src/app/classes/shirt';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css'],
})
export class ImageZoomComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Shirt,
    public dialogRef: MatDialogRef<ImageZoomComponent>,
    public dialog: MatDialog
  ) {}
}
