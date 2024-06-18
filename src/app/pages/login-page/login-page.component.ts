import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private router: Router, private data: AuthService) {
  }

  public isShow: boolean = false;
  public isLogin: boolean = false;
  public isLoading: boolean = false;

  email = "";
  password = "";

  public login(): void {
    console.log(this.email, this.password)
    this.isLogin = true;
    this.isLoading = true;

    this.data.login({username: this.email, password: this.password}).subscribe((response) => {
        this.isLogin = false;
        this.isLoading = false;
        this.router.navigate(['/dashboard']).then();
      },
      error => {
        console.log(error)
      })
  }

  public changeType(): void {
    this.isShow = !this.isShow;
  }
}
