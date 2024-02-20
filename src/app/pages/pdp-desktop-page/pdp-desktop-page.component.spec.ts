import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpDesktopPageComponent } from './pdp-desktop-page.component';

describe('PdpDesktopPageComponent', () => {
  let component: PdpDesktopPageComponent;
  let fixture: ComponentFixture<PdpDesktopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdpDesktopPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdpDesktopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
