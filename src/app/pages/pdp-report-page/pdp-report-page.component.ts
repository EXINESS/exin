import { Component } from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-pdp-report-page',
  templateUrl: './pdp-report-page.component.html',
  styleUrl: './pdp-report-page.component.scss'
})
export class PdpReportPageComponent {
  public menu: menuItem[] = [
    {id: 0, title: 'گزارش گیری', link: '/pdp/report'}
  ];

  public activeNumber: number = 0;
}
