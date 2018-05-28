import { GithubService } from './../github.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgxMdService } from 'ngx-md';
import * as moment from 'moment';

import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class HomeComponent implements OnInit {

  releases: any;
  markdown: any;
  constructor(
    private githubService: GithubService,
    private _markdown: NgxMdService
  ) { }

  ngOnInit() {
    this.getRelease();
  }
  async getRelease() {
    moment.locale('th');
    const rs: any = await this.githubService.getRelease();
    let laster = true;
    rs.forEach(r => {
      r.latest = laster;
      laster = false;
      r.published_at = moment(r.published_at).format('D MMMM ') + (moment(r.published_at).get('year') + 543);
    });
    this.releases = rs;
    console.log(this.releases[0].name);
    console.log(this.releases);
  }
}
