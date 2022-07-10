import { Injectable } from '@angular/core';
import { ShirtForm } from '../interfaces/shirt-form';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';

import { Packer } from 'docx';
import * as fs from 'file-saver';
import { DocumentCreator } from './docxGenerator/docxGenerator';
import { BehaviorSubject } from 'rxjs';
import { Shirt } from '../classes/shirt';
import { ShirtTrademark } from '../classes/shirt-trademark';

@Injectable({
  providedIn: 'root',
})
export class ShirtService {
  constructor(private http: HttpClient) {}

  shirtList: ShirtForm[] = [];

  shirtSubject = new BehaviorSubject<ShirtForm[]>([]);

  isLong: boolean = true;

  //encoding header to the appropriate type
  options = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };

  changeType(id: number) {
    this.shirtList[id].isLong = !this.shirtList[id].isLong;
    this.generateBullets(id);
  }

  generateBullets(id: number) {
    if (this.shirtList[id].isLong) {
      const rndInt = Math.floor(Math.random() * 9) + 1;
      this.shirtList[id].bp1 = this.templateList[rndInt].bp1;
      this.shirtList[id].bp2 = this.templateList[rndInt].bp2;
    } else {
      this.shirtList[id].bp1 = '';
      this.shirtList[id].bp2 = this.shortTemplate;
    }
  }

  //check if current query has any registered trademarks
  async checkTrademark(query: string): //string[] {
  Promise<ShirtTrademark> {
    //replace all dots(.) with spaces to find all trademarks
    query = query.replace(/\./g, ' ');

    let results!: any;
    let confirmedTM: ShirtTrademark = new ShirtTrademark();

    const body = `query=${query}`;

    results = this.http
      .post(`/api/ngrams.php`, body, this.options)
      .subscribe((response) => {
        results = response;

        for (let result of results) {
          if (
            result[2] === 'LIVE' && //check if tm is live
            result[1].indexOf(' ') >= 0 //check if its plural
          ) {
            confirmedTM.trademarkName.push(result[1]);
            confirmedTM.trademarkSerial.push(result[0]);
          }
        }
        if (confirmedTM.trademarkName.length == 0) {
          confirmedTM.trademarkName.push('CHECK PASSED');
        }
      });
    confirmedTM.trademarkName.shift();
    return confirmedTM;
  }

  //check if the element exists
  checkLength(id: number, query: string): boolean {
    if (query == '>') return this.shirtList[id + 1] === undefined;
    else return this.shirtList[id - 1] === undefined;
  }

  //edit array to save filled shirt information
  saveShirt(shirt: ShirtForm) {
    this.shirtList[shirt.id] = shirt;
  }

  //add new empty shirt to array and let listeners know its there
  createShirt(isLong: boolean, link?: string) {
    this.shirtList.push(new Shirt(this.shirtList.length, isLong, link));
    this.generateBullets(this.shirtList.length - 1);
    this.shirtSubject.next(this.shirtList);
  }

  //split imported links and place them into array
  saveLinks(links: string) {
    let shirtLink: string[] = links.split('\n');
    for (let link of shirtLink) {
      if (link != '') {
        link = link.replace(/^[0-9]{0,4}.\s/g, ''); //remove numbers and dots from link
        this.createShirt(this.isLong, link);
      }
    }
  }

  //save image into array
  saveImages(image: File) {
    let len = this.shirtList.length;
    this.createShirt(this.isLong);
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (_event) => {
      this.shirtList[len].image = reader.result;
    };
  }

  //invert isLong
  setLong(): boolean {
    this.isLong = !this.isLong;
    return this.isLong;
  }

  //export saved shirts to word file
  exportAsWord() {
    const doc = new DocumentCreator().create(this.shirtList);

    Packer.toBlob(doc).then((buffer) => {
      fs.saveAs(buffer, formatDate(new Date(), 'ddMMYY', 'en') + '.docx');
    });

    const longShirts = this.shirtList.filter(
      (shirt) => shirt.isLong == true
    ).length;

    alert(
      'Long shirts: ' +
        longShirts +
        '\nShort shirts: ' +
        (this.shirtList.length - longShirts)
    );
  }

  //temporary local shirt templates
  shortTemplate: string =
    'This Irish pride design is perfect for any March birthday guy or girl, drinking lover, Saint Patrick Day birthday party or just a beer fan who loves St. Paddy’s Day. ';

  templateList: any[] = [
    {
      bp1: 'Whether you are a proud expecting parent, soon to be mom or dad or just love Easter, this Happy Easter design is great for any pregnant couple to show their Easter spirit in style. A must have for any Easter tradition lover or expecting father and mother.',
      bp2: 'Featuring a baby chick with a humorous saying, this Easter egg design is great for any baby shower or party. Ideal Easter joke design for any future dad or mom to wear on any gender reveal. Perfect pregnancy announcement design to announce your pregnancy.',
    },
    {
      bp1: 'Whether you are a proud surgical technologist, surgical technician or just a surgical care professional, this medical humor design is for any surgical specialist to wear. Perfect medical spirit design for any surgical assistant or operating room technician',
      bp2: 'Featuring scrubbing tools with a humorous saying, this OR nurse design is for any nursing practitioner or health care provider. Perfect registered nurse design for any licensed nurse to show her nurse heartbeat in style. A must have for every senior nurse.',
    },
    {
      bp1: 'If you are a proud cheering mom or just love cheering and looking for something to show your cheering spirit in style, this supporting mother design is great for any loving mother on any cheer practice or session. A must have for every world’s best mother.',
      bp2: 'Featuring a megaphone with a humorous saying, this cheering competition design is for any mommy to wear on any cheering training or event. Ideal cheerleading momma design for every helping parent or cheerleading lover. Great design for any cheerleading fan',
    },
    {
      bp1: 'Are you a proud guy or girl from Chicago looking for something fun to show you love Saint Patrick’s Day tradition? If the answer is yes, this Irish clover design is for any Irish beer drinking lover to show his drinking spirit. A must have for any beer fan',
      bp2: 'Featuring an Irish Shamrock with a humorous saying, this Chicago pun design is great for any drinking expert to wear on any St. Paddy’s Day celebration or festival. Ideal St. Patty’s Day design for any Irish tradition lover. Great for any Irish culture fan',
    },
    {
      bp1: 'Whether you are a proud airplane expert, airplane fan or just love airplanes, this airplane spirit design is for any airplane lover or fanatic. Perfect airplane humor design for any guy or girl crazy about airplanes. A must have for any airplane specialist',
      bp2: 'Featuring a humorous saying, this aviation joke design is for every airplane controller or operator while flying his plane. Great flying lover design for any airplane hobbyist or RC plane lover. Perfect airplane crew design for any legendary pilot to wear.',
    },
    {
      bp1: 'Whether you are a proud professional golfer, golfing fan or just love playing golf, this retired golfer design is great for any golfing master. Perfect golf king or queen design for every casual golfer on any golf match. A must have for any golfing fanatic',
      bp2: 'Featuring golf equipment with a humorous saying, this golf king or queen design is for any golf course expert to show his golf heartbeat or spirit. Great golf humor design for any golf guy or girl to wear. Ideal golf buddy design for every golf specialist.',
    },
    {
      bp1: 'Are you a proud Irish tradition lover or a St. Patrick’s Day fanatic looking for something to show you love St. Paddy’s Day? If you are, this Irish luck design is for every Irish Shenanigans crew member to show his Irish pride. A must have for any Irishman',
      bp2: 'Featuring an Irish Shamrock with a humorous saying, this St. Patty’s Day design is for any beer lover on any Saint Patrick’s Day party or party. Ideal Irish spirit design for any Irish culture lover. Great Irish humor design for any person with Irish roots',
    },
    {
      bp1: 'If you are a proud cat owner, cat lover or professional veterinarian and looking for something to show you love cats, this cat rescue design is for every adoption center worker or staff. Perfect kitten owner design for every cat shelter staff or volunteer.',
      bp2: 'Featuring a kitty with a humorous saying, this cat whisperer design is for any cat fanatic or pet owner to wear while saving cats. Great cat spirit design for any cat mom or dad to say cat is my favorite animal. Ideal cat guy or girl design for any cat fan',
    },
    {
      bp1: 'Are you a proud school teacher or a taco lover looking for something fun to show you love puns and teaching? If you are, this taco fan design is a great choice for any school professor to show his taco spirit in style.  A must have for any loving teacher.',
      bp2: 'Featuring a humorous saying, this teacher pun design is a great pick for any food joke lover to wear. Ideal fast food lover design for those crazy about tacos. Great school staff design for any elementary or preschool teacher on any school class or session',
    },
    {
      bp1: 'Whether you are proud teaching lover or gym workout coach, this inspirational quote design is for any school staff to show appreciation on National Teacher’s Day. Great positive affirmation design for any loving teacher to show he loves motivational quotes',
      bp2: 'Featuring a retro humorous saying, this get motivated design is great for any school educator or tutor to encourage students. Ideal mental growth design for any team player. Perfect inspirational saying design for any school professor or movie quote lover.',
    },
  ];
}
