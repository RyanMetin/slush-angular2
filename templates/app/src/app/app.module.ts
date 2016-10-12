import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../examples/home.component';
import { LinksComponent } from '../examples/links.component';
import { BoxShadowDirective } from '../shared/directive/example.directive';
import { CapitalizePipe } from '../shared/pipe/example.pipe';
import { LinkService } from '../shared/service/example.service';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent,
    BoxShadowDirective,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'links', component: LinksComponent }
    ])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LinkService,
    Title
  ]
})
export class AppModule {}