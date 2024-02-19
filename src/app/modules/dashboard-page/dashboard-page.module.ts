import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {DashboardPageComponent} from "../../pages/dashboard-page/dashboard-page.component";
import {HeaderModule} from "../header/header.module";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule, NgOptimizedImage]
})
export class DashboardPageModule { }
