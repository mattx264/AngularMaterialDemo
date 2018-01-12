import {
  MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule,
  MatSliderModule, MatSidenavModule, MatButtonModule, MatFormFieldModule,
  MatSidenavContainer, MatInputModule, MatIconModule, MatStepperModule, MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatButtonModule, MatStepperModule, MatSelectModule,
    MatSliderModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule
  ],
  imports: [
    FlexLayoutModule,
    MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatButtonModule, MatStepperModule, MatSelectModule,
    MatSliderModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule

  ]

})
export class AngularModule { }
