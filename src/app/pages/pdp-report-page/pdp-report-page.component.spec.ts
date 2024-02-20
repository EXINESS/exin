import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpReportPageComponent } from './pdp-report-page.component';

describe('PdpReportPageComponent', () => {
  let component: PdpReportPageComponent;
  let fixture: ComponentFixture<PdpReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdpReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdpReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
