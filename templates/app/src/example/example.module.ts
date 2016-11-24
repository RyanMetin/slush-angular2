import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ExampleRouting } from './example.routing';
import { HomeComponent } from './component/home.component';
import { LinksComponent } from './component/links.component';
import { NavComponent } from './component/nav.component';

import { CapitalizePipe } from './pipe/capitalize.pipe';
import { LinkService } from './service/link.service';
import { ShadowDirective } from './directive/shadow.directive';

@NgModule({
  declarations: [ HomeComponent, LinksComponent, NavComponent, CapitalizePipe, ShadowDirective ],
  exports: [ HomeComponent, LinksComponent, NavComponent, HttpModule, RouterModule ],
  imports: [ CommonModule, ExampleRouting, HttpModule, RouterModule ],
  providers: [ LinkService, Title ]
})
export class ExampleModule { }
