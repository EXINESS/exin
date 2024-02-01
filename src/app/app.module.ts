import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {LoginPageModule} from "./modules/login-page/login-page.module";
import {DashboardPageModule} from "./modules/dashboard-page/dashboard-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, LoginPageModule, DashboardPageModule],
  bootstrap: [AppComponent],
})

export class AppModule {
}
