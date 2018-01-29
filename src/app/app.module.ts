import { AngularModule } from './angularModule';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule, MatCheckboxModule, MatRadioModule, MatToolbarModule,
  MatSliderModule, MatSidenavModule, MatButtonModule, MatFormFieldModule, MatSidenavContainer, MatInputModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule, BrowserAnimationsModule,  ReactiveFormsModule,
    AngularModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
