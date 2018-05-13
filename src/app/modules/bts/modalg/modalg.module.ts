import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalgRoutingModule } from './modalg-routing.module';
import { MoadalgaComponent } from './moadalga/moadalga.component';
// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome` and `npm i --save @fortawesome/fontawesome-free-solid`
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/fontawesome-free-solid';
import * as fontawesome from '@fortawesome/fontawesome';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
fontawesome.library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
// *************************************************************************

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    ModalgRoutingModule,
    ModalGalleryModule.forRoot(),
    MatButtonModule
  ],
  declarations: [MoadalgaComponent],
  exports:[CommonModule,FormsModule,MoadalgaComponent]
})
export class ModalgModule { }
