import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {LoginPageModule} from "./modules/login-page/login-page.module";
import {DashboardPageModule} from "./modules/dashboard-page/dashboard-page.module";
import {LandingPageModule} from "./modules/landing-page/landing-page.module";
import {PdpDesktopPageModule} from "./modules/pdp-desktop-page/pdp-desktop-page.module";
import {PdpReportPageModule} from "./modules/pdp-report-page/pdp-report-page.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, LandingPageModule, LoginPageModule, DashboardPageModule, PdpDesktopPageModule, PdpReportPageModule],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})

export class AppModule {
}
