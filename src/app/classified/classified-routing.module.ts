import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedModuleComponent } from './classified.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: ClassifiedModuleComponent,
    children: [
      { path: 'kategoria', component: CategoryComponent },
      { path: 'szczegoly', component: DetailsComponent },
      { path: 'dodaj', component: AddComponent },
      { path: '', redirectTo: 'kategoria', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassifiedRoutingModule { }
