import {Component, Input} from '@angular/core';
import {menuItem} from '../models/menuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input() public menu: menuItem[] = []
  public isShow: boolean = this.menu.length == 0;

  public identify(index: number, item: menuItem): number {
    return item.id;
  };
}
