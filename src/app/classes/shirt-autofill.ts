import { AutofillShirtForm } from '../interfaces/autofill-form';
import { TitleCasePipe } from '@angular/common';

export class ShirtAutofill implements AutofillShirtForm {
  titlecasePipe = new TitleCasePipe();

  constructor(title: string, brand: string) {
    this.title = title;
    this.brand = brand;
  }

  title: string = '';
  brand: string = '';

  public prepare(): void {
    this.brand = this.brand.trimEnd();
    this.title = this.title.trimEnd();
    this.brand = this.titlecasePipe.transform(this.brand);
    this.title = this.titlecasePipe.transform(this.title);
  }
}
