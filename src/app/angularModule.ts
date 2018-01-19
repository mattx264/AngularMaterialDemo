import {
  MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule,
  MatSliderModule, MatSidenavModule, MatButtonModule, MatFormFieldModule,
  MatSidenavContainer, MatInputModule, MatIconModule, MatStepperModule, MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  exports: [
    FlexLayoutModule,
    MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatButtonModule, MatStepperModule, MatSelectModule,
    MatSliderModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, FileUploadModule
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatButtonModule, MatStepperModule, MatSelectModule,
    MatSliderModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, FileUploadModule

  ]

})
export class AngularModule { }
