import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadListItemComponent } from './download-list-item.component';

describe('DownloadListItemComponent', () => {
  let component: DownloadListItemComponent;
  let fixture: ComponentFixture<DownloadListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
