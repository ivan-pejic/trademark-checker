import { Component, OnInit } from '@angular/core';

import { AutofillService } from 'src/app/services/autofill.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-autofill-keywords',
  templateUrl: './autofill-keywords.component.html',
  styleUrls: ['./autofill-keywords.component.css'],
})
export class AutofillKeywordsComponent implements OnInit {
  constructor(
    public autofillService: AutofillService,
    public dialogRef: MatDialogRef<AutofillKeywordsComponent>
  ) {}

  ngOnInit(): void {}

  saveKeywords(keywords: string): void {
    this.autofillService.saveKeywords(keywords);
    this.dialogRef.close();
  }
}
