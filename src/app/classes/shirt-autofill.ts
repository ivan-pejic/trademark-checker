import { AutofillShirtForm } from '../interfaces/autofill-form';
import { TitleCasePipe } from '@angular/common';

export class ShirtAutofill implements AutofillShirtForm {
  titlecasePipe = new TitleCasePipe();

  constructor(shirtText: string) {
    this.brand = shirtText + ' - ';
  }

  title: string = '';
  brand: string;

  public prepare(): void {
    this.brand = this.brand.trimEnd();
    this.title = this.title.trimEnd();
    this.brand = this.titlecasePipe.transform(this.brand);
    this.title = this.titlecasePipe.transform(this.title);

    if (this.brand.length <= 45) this.brand += ' Gift';
  }
}
