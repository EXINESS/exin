import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from "../../component/header/header.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, NgOptimizedImage, RouterLink]
})
export class HeaderModule {
}
