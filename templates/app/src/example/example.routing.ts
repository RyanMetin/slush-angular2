import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { LinksComponent } from './component/links.component';

export const ModuleRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'links', component: LinksComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(ModuleRoutes)
  ]
})
export class ExampleRouting { }
