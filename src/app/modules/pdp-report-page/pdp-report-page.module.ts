import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {PdpReportPageComponent} from "../../pages/pdp-report-page/pdp-report-page.component";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";



@NgModule({
  declarations: [PdpReportPageComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule]
})
export class PdpReportPageModule { }
