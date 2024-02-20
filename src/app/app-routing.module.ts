import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {PdpReportPageComponent} from "./pages/pdp-report-page/pdp-report-page.component";
import {PdpDesktopPageComponent} from "./pages/pdp-desktop-page/pdp-desktop-page.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'pdp/report', component: PdpReportPageComponent},
  {path: 'pdp/desktop', component: PdpDesktopPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
