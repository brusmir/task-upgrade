import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { JobStatus } from '../../shared/job-status.model';
import { Job } from '../../shared/job.model';

@Component({
  selector: 'app-download-list-item',
  standalone: true,
  imports: [],
  templateUrl: './download-list-item.component.html',
  styleUrl: './download-list-item.component.scss'
})
export class DownloadListItemComponent {
  // job = input<Job | undefined>();
  job = input.required<Job>();

  @Output() readonly downloadFile$: EventEmitter<number> = new EventEmitter();

  JobStatus = JobStatus;
}
