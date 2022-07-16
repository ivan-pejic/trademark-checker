import { Component, OnDestroy, OnInit } from '@angular/core';
import { LongBulletDialogComponent } from '../long-bullet-dialog/long-bullet-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ShirtService } from 'src/app/services/shirt.service';
import { Subscription } from 'rxjs';
import { Shirt } from 'src/app/classes/shirt';

@Component({
  selector: 'app-shirt-list',
  templateUrl: './shirt-list.component.html',
  styleUrls: ['./shirt-list.component.css'],
})
export class ShirtListComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog, public shirtService: ShirtService) {}

  shirts: Shirt[] = [];
  private shirtSub!: Subscription;

  ngOnInit(): void {
    this.shirtSub = this.shirtService.shirtSubject.subscribe(
      (response: Shirt[]) => (this.shirts = response)
    );
  }

  ngOnDestroy(): void {
    this.shirtSub.unsubscribe();
  }

  openDialog(id: number) {
    let dialogRef = this.dialog.open(LongBulletDialogComponent, {
      data: this.shirts[id],
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == '<') this.openDialog(id - 1);
      else if (result == '>') this.openDialog(id + 1);
    });
  }
}
