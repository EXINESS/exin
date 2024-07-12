import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {HeaderModule} from "../header/header.module";
import {SidebarMenuModule} from "../sidebar-menu/sidebar-menu.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HeaderModule, SidebarMenuModule, NgOptimizedImage]
})
export class DashboardPageModule { }
