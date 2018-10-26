import { BoardTopicComponent } from './board-topic/board-topic.component';
import { BoardTopicDetailComponent } from './board-topic-detail/board-topic-detail.component';
import { BoardComponent } from './board/board.component';
import { DemoComponent } from './demo/demo.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DenyComponent } from 'app/deny/deny.component';
// import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'document', component: DocumentComponent, pathMatch: 'full' },
      { path: 'demo', component: DemoComponent, pathMatch: 'full' },
      { path: 'board', component: BoardComponent, pathMatch: 'full' },
      { path: 'board/topic', component: BoardTopicComponent, pathMatch: 'full' },
      { path: 'board/topic/detail', component: BoardTopicDetailComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
