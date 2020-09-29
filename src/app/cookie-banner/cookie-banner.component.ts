import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  cookies: [];

  constructor(private cookiesService: CookiesService) { }

  ngOnInit(): void {
    this.getCookiesData();
  }

  getCookiesData(){
    this.cookiesService.getCookiesData()
      .subscribe(data => this.cookies = data['accordian']);
  }
}
