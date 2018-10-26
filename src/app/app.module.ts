import { AlertService } from './alert.service';
import { BoardService } from './board.service';
import { RouterModule } from '@angular/router';
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
import { BoardComponent } from './board/board.component';
import { BoardTopicDetailComponent } from './board-topic-detail/board-topic-detail.component';
import { BoardTopicComponent } from './board-topic/board-topic.component';
import { DateToThaiPipe } from './date-to-thai.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    DocumentComponent,
    DemoComponent,
    BoardComponent,
    BoardTopicComponent,
    BoardTopicDetailComponent,
    DateToThaiPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    NgxMdModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    GithubService,
    BoardService,
    AlertService,
    CookieService,
    { provide: 'API_URL', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
