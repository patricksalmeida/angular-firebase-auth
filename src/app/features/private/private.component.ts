import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PrivateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
