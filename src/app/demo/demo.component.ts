import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoDemo() {
    const url = `http://www.google.co.th`;
    window.open(url, '_blank');
  }
}
