import { Component } from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public menu: menuItem[] = [
    {id: 0, title: "اشتراک ویژه", link: '/'},
    {id: 1, title: "افزونه‌ها", link: '/'},
    {id: 2, title: "آموزش", link: '/'},
    {id: 3, title: "درباره ما", link: '/'},
    {id: 4, title: "درخواست مشاوره", link: '/'},
  ]
}
