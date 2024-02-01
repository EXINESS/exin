import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private router : Router) {}

  public isShow: boolean = false;

  public isLogin: boolean = false;

  public isLoading: boolean = false;

  public login(): void {
    this.isLogin = true;
    this.isLoading = true;

    setTimeout((): void => {
      this.isLogin = false;
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 2000);
  }

  public changeType(): void {
    this.isShow = !this.isShow;
  }
}
