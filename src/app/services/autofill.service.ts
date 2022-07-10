import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ShirtAutofill } from '../classes/shirt-autofill';

@Injectable({
  providedIn: 'root',
})
export class AutofillService {
  constructor(private titlecasePipe: TitleCasePipe) {}

  keywords!: string;

  generateShirt(shirtText: string): ShirtAutofill {
    shirtText = shirtText.trim();
    let shirt = new ShirtAutofill('', shirtText + ' - ');
    let rand = Math.random();
    if (rand <= 0.6) shirt.title += 'Funny ';
    else if (rand > 0.6 && rand <= 0.88) shirt.brand = 'Funny ';

    //if (rand <= 0.85) shirt.brand+= 'Gift ';

    let keywords = this.getKeywords();

    for (let i = 0; i < keywords.length * 2; i++) {
      let rand = Math.floor(Math.random() * keywords.length);
      if (
        shirt.brand.length + keywords[rand].length <= 50 &&
        shirt.brand.indexOf(keywords[rand]) == -1
      ) {
        shirt.brand += keywords[rand];
        keywords.splice(rand, 1);
      }
    }

    for (let i = 0; i < keywords.length * 2; i++) {
      let rand = Math.floor(Math.random() * keywords.length);
      if (
        shirt.title.length + keywords[rand].length <= 60 &&
        shirt.title.indexOf(keywords[rand]) == -1
      ) {
        shirt.title += keywords[rand];
        keywords.splice(rand, 1);
      }
    }

    shirt.prepare();
    if (shirt.brand.length <= 45) shirt.brand += ' Gift';

    return shirt;
  }

  getKeywords(): string[] {
    let keywords = this.keywords.split(',');
    keywords.forEach((keyword, index) => {
      keyword = keyword.trim();
      keywords[index] += ' ';
    });
    return keywords;
  }

  saveKeywords(query: string): void {
    this.keywords = query.replace(/\n|\r/g, '');
  }
}
