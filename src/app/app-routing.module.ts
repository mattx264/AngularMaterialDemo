
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  { path: 'classified', loadChildren: 'app/classified/classified.module#ClassifiedModule' },
//  { path: 'rule', loadChildren: 'app/rule/rule.module#RuleModule' }
  // , {
  //   path: 'components', component: ComponentExampleComponent
  // }, {
  //   path: 'error', component: ErrorComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
