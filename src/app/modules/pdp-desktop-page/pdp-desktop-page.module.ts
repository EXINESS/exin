import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {PdpDesktopComponent} from "../../pages/pdp-desktop/pdp-desktop.component";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PdpDesktopComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule, RouterLink, FormsModule]
})
export class PdpDesktopPageModule { }
