import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, HeaderModule, NgOptimizedImage, FormsModule]
})
export class LoginPageModule {
}
