import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "../header/header.module";
import {PdpReportComponent} from "../../pages/pdp-report/pdp-report.component";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";



@NgModule({
  declarations: [PdpReportComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule]
})
export class PdpReportPageModule { }
