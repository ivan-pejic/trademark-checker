import { Document, Paragraph, Spacing, TextRun } from 'docx';
import { Shirt } from 'src/app/classes/shirt';

export class DocumentCreator {
  public create(saveShirts: Shirt[]): Document {
    let doc = new Paragraph({ style: 'Calibri' });

    for (let shirt of saveShirts) {
      doc.addChildElement(this.createShirtBullet(shirt));
    }

    const document = new Document({
      styles: {
        paragraphStyles: [
          {
            id: 'Calibri',
            name: 'Calibri',
            run: {
              font: 'Calibri',
              size: 22,
            },
            paragraph: {
              spacing: { after: 160 },
            },
          },
        ],
      },

      sections: [
        {
          children: [doc],
        },
      ],
    });
    return document;
  }

  public createShirtBullet(shirt: Shirt): TextRun {
    if (shirt.isLong)
      return new TextRun({
        children: [
          new TextRun({
            text: (shirt.id + 1).toString() + '.',
            bold: true,
          }),
          new TextRun({ text: 'Brand', break: 1 }),
          new TextRun({
            text: shirt.brand,
            break: 1,
            bold: true,
          }),
          new TextRun({ text: 'Title', break: 1 }),
          new TextRun({
            text: shirt.title,
            break: 1,
            bold: true,
          }),
          new TextRun({ text: 'BP1', break: 1 }),
          new TextRun({ text: shirt.bp1, break: 1 }),
          new TextRun({ text: 'BP2', break: 1 }),
          new TextRun({ text: shirt.bp2, break: 1 }),
          new TextRun({ text: '', break: 2 }),
        ],
      });
    else
      return new TextRun({
        children: [
          new TextRun({
            text: (shirt.id + 1).toString() + '.',
            bold: true,
          }),
          new TextRun({ text: 'Brand', break: 1 }),
          new TextRun({
            text: shirt.brand,
            break: 1,
            bold: true,
          }),
          new TextRun({ text: 'Title', break: 1 }),
          new TextRun({
            text: shirt.title,
            break: 1,
            bold: true,
          }),
          new TextRun({ text: 'BP1', break: 1 }),
          new TextRun({
            text: shirt.bp1,
            break: 1,
            bold: true,
          }),
          new TextRun({ text: 'BP2', break: 1 }),
          new TextRun({ text: shirt.bp2, break: 1 }),
          new TextRun({ text: 'Description:', break: 1 }),
          new TextRun({ children: this.description(shirt) }),
          new TextRun({ text: '', break: 2 }),
        ],
      });
  }

  description(shirt: Shirt) {
    var BpArray: string[] = [];
    var topDescription: string = '';
    var bottomDescription: string = '';

    if (shirt.bp2 == '') {
      return [
        new TextRun({ text: 'shirt empty', break: 1 }),
        new TextRun({ text: 'shirt empty', break: 1 }),
      ];
    } else {
      BpArray = shirt.bp2.split(' ');

      var isTop: boolean = true;
      for (let i = 1; i < BpArray.length; i++) {
        if (BpArray[i] != 'is' && isTop === true)
          topDescription = topDescription + BpArray[i] + ' ';
        else {
          isTop = false;
          if (BpArray[i] != 'is')
            bottomDescription = bottomDescription + BpArray[i] + ' ';
        }
      }

      topDescription = topDescription + this.isText(shirt) + shirt.bp1 + " '";
      bottomDescription =
        bottomDescription[0].toUpperCase() + bottomDescription.slice(1);
      topDescription =
        topDescription[0].toUpperCase() + topDescription.slice(1);

      return [
        new TextRun({ text: topDescription, break: 1 }),
        new TextRun({ text: bottomDescription, break: 1 }),
      ];
    }
  }

  isText(shirt: Shirt): string {
    if (shirt.isText) return "that reads: ' ";
    else if (
      !shirt.isText &&
      (shirt.bp1[0] === 'A' ||
        shirt.bp1[0] === 'E' ||
        shirt.bp1[0] === 'I' ||
        shirt.bp1[0] === 'O' ||
        shirt.bp1[0] === 'U')
    )
      return 'that shows an ';
    else return 'that shows a ';
  }
}
