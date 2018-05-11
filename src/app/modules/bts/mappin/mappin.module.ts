import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappinRoutingModule } from './mappin-routing.module';
import { PintabComponent } from './pintab/pintab.component';
import { MatTabsModule, MatCardModule, MatIconModule } from '@angular/material';
import { ModalgalleryComponent } from './modalgallery/modalgallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome` and `npm i --save @fortawesome/fontawesome-free-solid`
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/fontawesome-free-solid';
import * as fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);

@NgModule({
  imports: [
    CommonModule,
    MappinRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ModalGalleryModule.forRoot()
  ],
  declarations: [PintabComponent, ModalgalleryComponent]
})
export class MappinModule { }
