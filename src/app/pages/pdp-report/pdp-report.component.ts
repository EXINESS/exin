import {Component, OnInit} from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-pdp-report',
  templateUrl: './pdp-report.component.html',
  styleUrl: './pdp-report.component.scss'
})
export class PdpReportComponent implements OnInit {
  constructor() {
  }

  public menu: menuItem[] = [
    {id: 0, title: 'میزکار', link: '/pdp/desktop'}
  ];

  public activeNumber: number = 0;
  identify: any;
  works: { id: number, title: string, subtask: { id: number, title: string, state: number }[] }[] = [];
  showlist: boolean[] = [];
  taskNumber:{total: number, success: number}[] = [];

  ngOnInit(): void {
    let w = localStorage.getItem('works');
    if (w == null)
      return;
    this.works = JSON.parse(w);
    for (let i in this.works) {
      this.showlist.push(false);
      let s= 0;
      for(let j = 0; j < this.works[i].subtask.length; j++){
        console.log(j)
        if(this.works[i].subtask[j].state == 1){
          s++;
        }
      }
      let total = this.works[i].subtask.length;
      this.taskNumber.push({total: total, success: s});
    }
  }


  show(id: number) {
    this.showlist[id] = !this.showlist[id];
  }


  changeState(id: number, id2: number) {
    this.works[id].subtask[id2].state++;
    if(this.works[id].subtask[id2].state > 2){
      this.works[id].subtask[id2].state = 0;
    }
    localStorage.setItem('works', JSON.stringify(this.works));
  }
}

