

import { Component, NgModule, VERSION, OnInit, Input } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy, GalleryService,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';


@Component({
  selector: 'app-moadalga',
  templateUrl: './moadalga.component.html',
  styleUrls: ['./moadalga.component.scss']
})
export class MoadalgaComponent implements OnInit {


  ngOnInit(){

  }
  name: string;

  constructor(private galleryService: GalleryService) {
    this.name = `${VERSION.full}`
  }

  imageIndex = 1;
  galleryId = 1;


 @Input() public images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
        description: 'Description 0'
      }
    )
  ];




  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  
  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, {layout: new AdvancedLayout(index, true)});
  }
  
  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}

