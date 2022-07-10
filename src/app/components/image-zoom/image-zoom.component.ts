import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShirtForm } from 'src/app/interfaces/shirt-form';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css'],
})
export class ImageZoomComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ShirtForm,
    public dialogRef: MatDialogRef<ImageZoomComponent>,
    public dialog: MatDialog
  ) {}
}
