import { Component } from '@angular/core';
import { AutofillService } from '../../services/autofill.service';
import { ShirtAutofill } from 'src/app/classes/shirt-autofill';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AutofillKeywordsComponent } from '../autofill-keywords/autofill-keywords.component';

@Component({
  selector: 'app-autofill',
  templateUrl: './autofill.component.html',
  styleUrls: ['./autofill.component.css'],
})
export class AutofillComponent {
  constructor(
    public autofillService: AutofillService,
    public dialogRef: MatDialogRef<AutofillComponent>,
    public dialog: MatDialog
  ) {}

  shirts: ShirtAutofill[] = [];
  generateBrandAndTitle(shirtText: string): void {
    for (let i = 0; i < 25; i++) {
      this.shirts[i] = this.autofillService.generateShirt(shirtText);
    }
  }

  copy(query: string) {
    navigator.clipboard.writeText(query);
  }

  openDialog() {
    this.dialog.open(AutofillKeywordsComponent);
  }
}
