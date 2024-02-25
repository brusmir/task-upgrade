import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSpinnerComponent } from './download-spinner.component';

describe('DownloadSpinnerComponent', () => {
  let component: DownloadSpinnerComponent;
  let fixture: ComponentFixture<DownloadSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
