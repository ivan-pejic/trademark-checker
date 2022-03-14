import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShirtService } from 'src/app/services/shirt.service';

@Component({
  selector: 'app-shirt-import-dialog',
  templateUrl: './shirt-import-dialog.component.html',
  styleUrls: ['./shirt-import-dialog.component.css'],
})
export class ShirtImportDialogComponent implements OnInit, OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<ShirtImportDialogComponent>,
    private shirtService: ShirtService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  //images: File[] = [];
  images: any[] = [];
  index: number = 0;

  saveLinks(links: string) {
    this.shirtService.saveLinks(links);
    this.dialogRef.close();
  }

  saveImages() {
    for (let image of this.images) this.shirtService.saveImages(image);

    this.dialogRef.close();
  }

  onImageSelected(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files != null) {
      for (let i = 0; i < target.files.length; i++) {
        this.images.push(target.files[i]);
      }
    }
  }
}
