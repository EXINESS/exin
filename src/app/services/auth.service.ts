import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Inject, Injectable} from "@angular/core";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private routerService = Inject(Router);

  constructor(private http: HttpClient) {
  }

  public login(user: {
    username: string, password: string
  }): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/jwt/login/', user).pipe(
      tap(response => this.doLoginUser(user.username, response))
    )
  }

  private doLoginUser(email: string, tokens: any) {
    this.loggedUser = email;
    this.storeJwtToken(JSON.stringify(tokens));
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.routerService.navigate(['/login']);
  }

  public isLoggedIn() {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  isTokenExpired() {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if(!token) return false;

    const decoded = jwtDecode(JSON.parse(token).access);
    if(!decoded.exp) return false;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();
    return expirationDate < now;
  }

  refreshToken(){
    return this.http.post<any>('http://127.0.0.1:8000/jwt/token/refresh/', {'token': JSON.parse(localStorage.getItem(this.JWT_TOKEN) ?? "").refresh}).pipe(
      tap(response => this.storeJwtToken(JSON.stringify(response)))
    )
  }
}
