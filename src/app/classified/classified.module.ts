

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassifiedRoutingModule } from './classified-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { ClassifiedModuleComponent } from './classified.component';


@NgModule({
  imports: [
    CommonModule,
    ClassifiedRoutingModule,
    ClassifiedModuleComponent
  ],
  declarations: [HomeComponent, CategoryComponent, DetailsComponent ]
})
export class ClassifiedModule { }
