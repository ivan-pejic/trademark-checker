export interface ShirtForm {
  id: number;
  brand: string;
  title: string;
  bp1: string;
  bp2: string;
  link?: string;
  isLong: boolean;
  isText?: boolean;
  image?: any;
  tmBrand: string[];
  tmTitle: string[];
  tmBp1: string[];
  tmBp2: string[];
}
