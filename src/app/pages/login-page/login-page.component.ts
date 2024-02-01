import {Component} from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public menu: menuItem[] = [
    {id: 0, title: "اشتراک ویژه", link: '/'},
    {id: 1, title: "افزونه‌ها", link: '/'},
    {id: 2, title: "آموزش", link: '/'},
    {id: 3, title: "درباره ما", link: '/'},
    {id: 4, title: "درخواست مشاوره", link: '/'},
  ]

  public isShow: boolean = false;

  public isLogin: boolean = false;

  public isLoading: boolean = false;

  public login(): void {
    this.isLogin = true;
    this.isLoading = true;

    setTimeout((): void => {
      this.isLogin = false;
      this.isLoading = false;
    }, 2000);
  }

  public changeType(): void {
    this.isShow = !this.isShow;
  }
}
