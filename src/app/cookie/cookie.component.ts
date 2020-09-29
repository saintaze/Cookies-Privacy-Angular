import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  @Input() cookie;

  constructor() { }

  ngOnInit(): void {
  }

}
