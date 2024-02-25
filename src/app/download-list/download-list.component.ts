import { Component, inject } from '@angular/core';
import { DownloadService } from '../shared/download.service';
import { DownloadListItemComponent } from './download-list-item/download-list-item.component';

@Component({
  selector: 'app-download-list',
  standalone: true,
  imports: [DownloadListItemComponent],
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.scss'
})
export class DownloadListComponent {
  downloadService = inject(DownloadService);
  jobs = this.downloadService.jobs;

  onDownloadFile(jobId: number): void {
    this.downloadService.openSnackBar(`Job ${jobId} has been downloaded`);
  }
}
