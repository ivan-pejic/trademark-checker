import { ShirtTrademark } from './shirt-trademark';
import { TrademarkObject } from '../interfaces/trademark-object';

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
  link?: string;
  isLong!: boolean;
  isText?: boolean;
  image?: any;
  trademarks: TrademarkObject = {
    brand: new ShirtTrademark(),
    title: new ShirtTrademark(),
    bp1: new ShirtTrademark(),
    bp2: new ShirtTrademark(),
  };
  // tmBrand: ShirtTrademark = new ShirtTrademark();
  // tmTitle: ShirtTrademark = new ShirtTrademark();
  // tmBp1: ShirtTrademark = new ShirtTrademark();
  // tmBp2: ShirtTrademark = new ShirtTrademark();

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
