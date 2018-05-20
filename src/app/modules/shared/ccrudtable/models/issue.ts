import { Image } from "angular-modal-gallery";

export class Issue {
  id: number;
  title: string;
  btsName:string;
  eventReason : string;
  images : Image[]; 
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
  time : string;
  imageurl :  string = "http://www.hyperlinkcode.com/images/sample-image.jpg";

}


export class MImage{
index : number;
img : InnerImg;
}

export class InnerImg {
  url : string;
  desc : string;
}

export class ToatalImg {

  images : MImage[];

  constructor(img : MImage[]){
    this.images = img;
  }
}