import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@NgModule({
  declarations: [LoginPageComponent],
  providers: [AuthService, provideHttpClient()],
  imports: [CommonModule, HeaderModule, NgOptimizedImage, FormsModule, HttpClientModule]
})
export class LoginPageModule {
}
