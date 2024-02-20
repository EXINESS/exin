import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  @Input() public activeItem: number = 0;
}
