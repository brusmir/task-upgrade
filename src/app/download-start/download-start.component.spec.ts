import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadStartComponent } from './download-start.component';

describe('DownloadStartComponent', () => {
  let component: DownloadStartComponent;
  let fixture: ComponentFixture<DownloadStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
