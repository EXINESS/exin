import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const routerService = inject(Router);
  if (!authService.isLoggedIn()) {
    routerService.navigate(['/login']).then();
    return false;
  }
  return true;
};
