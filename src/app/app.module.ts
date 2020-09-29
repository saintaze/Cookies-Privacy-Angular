import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { SwitchComponent } from './switch/switch.component';
import { CookieComponent } from './cookie/cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent,
    SwitchComponent,
    CookieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
