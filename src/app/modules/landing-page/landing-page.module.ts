import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {LandingComponent} from "../../pages/landing/landing.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [LandingComponent],
    imports: [CommonModule, HeaderModule, NgOptimizedImage, FormsModule, RouterLink]
})
export class LandingPageModule { }
