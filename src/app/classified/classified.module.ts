import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifiedRoutingModule } from './classified-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { ClassifiedModuleComponent } from './classified.component';
import { AngularModule } from '../angularModule';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { ClassifiedItemComponent } from './classified-item/classified-item.component';
import { AddComponent } from './add/add.component';
import { InputFileComponent } from '../shared/input-file/input-file.component';
import { ByteFormatPipe } from '../shared/input-file/byte-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    ClassifiedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularModule

  ],
  declarations: [HomeComponent, CategoryComponent, DetailsComponent, ClassifiedModuleComponent, CategoryListComponent,
    CategoryItemComponent, ClassifiedItemComponent, AddComponent, InputFileComponent, ByteFormatPipe]
})
export class ClassifiedModule { }
