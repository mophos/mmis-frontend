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
import { environment } from '../environments/environment';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    DocumentComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    NgxMdModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GithubService,
    { provide: 'API_URL', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
