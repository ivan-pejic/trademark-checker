import { Trademark } from './trademark';
import { Trademarks } from '../interfaces/trademarks';

export class Shirt {
  constructor(id: number, isLong: boolean, link?: string) {
    this.id = id;
    this.isLong = isLong;
    this.link = link;
  }
  id: number;
  brand: string = '';
  title: string = '';
  bp1: string = '';
  bp2: string = '';
  isLong: boolean;
  link?: string;
  linkHint?: string;
  isText?: boolean;
  image?: any;
  trademarks: Trademarks = {
    brand: new Trademark(),
    title: new Trademark(),
    bp1: new Trademark(),
    bp2: new Trademark(),
  };

  public prepare(): void {
    this.brand = this.toUpper(this.brand);
    this.title = this.toUpper(this.title);

    if (!this.isLong) this.bp1 = this.toUpper(this.bp1);

    this.brand = this.brand.trimEnd();
    this.title = this.title.trimEnd();
    this.bp1 = this.bp1.trimEnd();
    this.bp2 = this.bp2.trimEnd();
  }

  private toUpper(query: string): string {
    return query.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
  }
}
