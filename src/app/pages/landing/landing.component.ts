import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {menuItem} from "../../component/models/menuItem";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('boxOne') boxOne!: ElementRef;
  @ViewChild('boxTwo') boxTwo!: ElementRef;

  private intervalId: any;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.renderer.setStyle(this.boxOne.nativeElement, 'inset-inline-start', Math.floor(Math.random() * 90) + 'vw');
      this.renderer.setStyle(this.boxOne.nativeElement, 'inset-block-start', Math.floor(Math.random() * 60) + 'vh');

      this.renderer.setStyle(this.boxTwo.nativeElement, 'inset-inline-start', Math.floor(Math.random() * 90) + 'vw');
      this.renderer.setStyle(this.boxTwo.nativeElement, 'inset-block-start', Math.floor(Math.random() * 90) + 'vh');
    }, 390);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  public menu: menuItem[] = [
    {id: 0, title: "اشتراک ویژه", link: '/'},
    {id: 1, title: "افزونه‌ها", link: '/'},
    {id: 2, title: "آموزش", link: '/'},
    {id: 3, title: "درباره ما", link: '/'},
    {id: 4, title: "درخواست مشاوره", link: '/'},
  ];

  public selectedModule: number = 0;
  public enTitle = ['Vision', 'Mission', 'Action', 'Dashboard', 'Option', 'ChatBot', 'Store'];
  public faTitle = ['چشم انداز', 'ماموریت', 'اقدام', 'میزکار', 'گزینه', 'چت بات', 'فروشگاه'];
  public description = ['متن یک', 'متن دو', 'متن سه', 'متن چهار', 'متن پنج', 'متن شش', 'متن هفت'];

  changeModule(index: number) {
    this.selectedModule = index;
  }

  public firstname = "";
  public lastname = "";
  public phone = "";
  public email = "";
  public submitform () {
    console.log(this.firstname, this.lastname, this.phone, this.email);
  }
}
