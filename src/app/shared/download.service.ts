import { Injectable, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadNotificationComponent } from '../download-notification/download-notification.component';
import { DownloadServerService } from '../_backend/download-server.service';
import { JobStatus } from './job-status.model';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  #_snackBar = inject(MatSnackBar);
  #downloadServerService = inject(DownloadServerService);
  jobs = this.#downloadServerService.jobs;
  showSpinner = signal(false);

  createJob() {
    return this.#downloadServerService.createJob();
  };

  getJobStatus(id: number) {
    return this.#downloadServerService.getJobStatus(id);
  }

  async waitForJobCompletion(): Promise<void> {
    const timeout = 5000;
    const interval = 3000;
    const jobId = this.createJob();
    this.showSpinner.set(true);

    await this.delay(timeout);

    if (this.getJobStatus(jobId) === JobStatus.DONE) {
      this.openSnackBar('Here would a download happen now');
      this.showSpinner.set(false);
    }

    let jobCompleted = false;
    while (!jobCompleted) {
      // Check if job is done (you need to implement this logic)
      jobCompleted = this.getJobStatus(jobId) === JobStatus.DONE;

      if (!jobCompleted) {
        await this.delay(interval);
      } else {
        this.openSnackBar('Here would a download happen now');
        this.showSpinner.set(false);
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openSnackBar(data: string): void {
    this.#_snackBar.openFromComponent(DownloadNotificationComponent, {
      duration: 3000,
      verticalPosition: 'top',
      data
    });
  }
}
