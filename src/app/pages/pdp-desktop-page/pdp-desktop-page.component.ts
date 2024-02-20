import {Component} from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-pdp-desktop-page',
  templateUrl: './pdp-desktop-page.component.html',
  styleUrl: './pdp-desktop-page.component.scss'
})
export class PdpDesktopPageComponent {
  public menu: menuItem[] = [
    {id: 0, title: 'میزکار', link: '/pdp/desktop'}
  ];

  public activeNumber: number = 1;
}
