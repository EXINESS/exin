import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {menuItem} from "../models/menuItem";
import {RouterModule} from "@angular/router";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterModule.forRoot([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menu to an empty array by default', () => {
    expect(component.menu).toEqual([]);
  });

  it('should initialize isShow to false by default', () => {
    expect(component.isShow).toBe(false);
  });

  it('should return the item id as a key for trackBy function', () => {
    const itemId = 1;
    const item: menuItem = {id: itemId, title: 'Test', link: ''};
    expect(component.identify(0, item)).toBe(itemId);
  });

  it('should toggle isShow value when showMenu is called', () => {
    const initialValue = component.isShow;
    component.showMenu();
    expect(component.isShow).toBe(!initialValue);
  });

  it('should have correct menu items', () => {
    component.menu = [
      {id: 0, title: 'Home', link: '/'},
      {id: 1, title: 'About', link: '/about'}
    ];
    fixture.detectChanges();

    const menuItems = fixture.debugElement.nativeElement.querySelectorAll('li');

    expect(menuItems.length).toBe(2);

    expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[1].textContent).toContain('About');

    expect(menuItems[0].querySelector('a').getAttribute('href')).toContain('/');
    expect(menuItems[1].querySelector('a').getAttribute('href')).toContain('/about');
  });
});
