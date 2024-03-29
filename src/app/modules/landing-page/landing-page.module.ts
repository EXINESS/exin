import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {LandingPageComponent} from "../../pages/landing-page/landing-page.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [LandingPageComponent],
    imports: [CommonModule, HeaderModule, NgOptimizedImage, FormsModule, RouterLink]
})
export class LandingPageModule { }
