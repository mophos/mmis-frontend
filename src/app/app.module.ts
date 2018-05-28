import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMdModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GithubService } from './github.service';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    NgxMdModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
