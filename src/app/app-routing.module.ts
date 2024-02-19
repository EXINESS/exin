import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
