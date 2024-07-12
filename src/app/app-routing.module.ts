import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from "./pages/login-page/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {PdpReportComponent} from "./pages/pdp-report/pdp-report.component";
import {PdpDesktopComponent} from "./pages/pdp-desktop/pdp-desktop.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'pdp/report', component: PdpReportComponent, canActivate: [authGuard]},
  {path: 'pdp/desktop', component: PdpDesktopComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
