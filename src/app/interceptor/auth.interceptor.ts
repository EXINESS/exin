import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = JSON.parse(getJwtToken() ?? '');
  if (jwtToken !== '') {
    let cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken.access}`
      },
    });
    return next(cloned);
  }
  return next(req);
};

function getJwtToken(): string | null {
  return localStorage.getItem('JWT_TOKEN');
}
