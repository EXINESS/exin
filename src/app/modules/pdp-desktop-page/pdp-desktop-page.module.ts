import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {PdpDesktopPageComponent} from "../../pages/pdp-desktop-page/pdp-desktop-page.component";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PdpDesktopPageComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule, RouterLink, FormsModule]
})
export class PdpDesktopPageModule { }
