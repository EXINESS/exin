import {Component, OnInit} from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
    selector: 'app-pdp-desktop-page',
    templateUrl: './pdp-desktop-page.component.html',
    styleUrl: './pdp-desktop-page.component.scss'
})
export class PdpDesktopPageComponent implements OnInit {
    constructor() {
    }

    public menu: menuItem[] = [
        {id: 0, title: 'میزکار', link: '/pdp/desktop'}
    ];

    public activeNumber: number = 1;
    identify: any;
    works: { id: number, title: string, subtask: { id: number, title: string, state: number }[] }[] = [];
    showlist: boolean[] = [];
    showDialog: boolean = false;
    saveId: number = 0;

    ngOnInit(): void {
        let w = localStorage.getItem('works');
        if (w == null)
            return;
        this.works = JSON.parse(w);
        for (let i in this.works) {
            this.showlist.push(false);
        }
    }

    addtask(title: string) {
        if (title == '') {
            alert("عنوان اقدام خالی نمی تواند باشد");
            return;
        }
        let id = 0;
        if (this.works.length != 0) {
            id = this.works[this.works.length - 1].id + 1;
        }
        this.works.push({id: id, title: title, subtask: []});
        this.showlist.push(false);
        localStorage.setItem('works', JSON.stringify(this.works));
    }

    show(id: number) {
        this.showlist[id] = !this.showlist[id];
    }

    addsubtask(title: string) {
        let id = 0;
        if (this.works[this.saveId].subtask.length != 0) {
            id = this.works[this.saveId].subtask[this.works[this.saveId].subtask.length - 1].id + 1;
        }
        if (title != '') {
            this.works[this.saveId].subtask.push({id: id, title: title, state: 0});
            localStorage.setItem('works', JSON.stringify(this.works));
        }
        this.showDialog = false;
    }

    showdialog(id: number) {
        this.saveId = id;
        this.showDialog = true;
    }

    notShow() {
        this.showDialog = false;
    }

    changeState(id: number, id2: number) {
        this.works[id].subtask[id2].state++;
        if(this.works[id].subtask[id2].state > 2){
            this.works[id].subtask[id2].state = 0;
        }
        localStorage.setItem('works', JSON.stringify(this.works));
    }

    removeItem(id: number) {
        let index = -1;
        for(let i=0; i < this.works.length; i++){
            if(this.works[i].id == id){
                index = i;
            }
        }
        this.works.splice(index, 1);
        localStorage.setItem('works', JSON.stringify(this.works));
    }
}
