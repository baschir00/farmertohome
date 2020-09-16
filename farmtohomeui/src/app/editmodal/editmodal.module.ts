import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent } from './modal-component';
import { EditmodalComponent } from "./editmodal.component";



@NgModule({
  //declarations: [],
  imports: [
    CommonModule, NgbModule
  ],
  //imports: [BrowserModule, NgbModule],
  declarations: [EditmodalComponent, NgbdModalContent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent],
  entryComponents: [NgbdModalContent]
})
export class EditmodalModule { }



EditmodalComponent
